/**
 * Google Apps Script для записи данных форм в Google Sheets
 *
 * УСТАНОВКА:
 * 1. Открой https://script.google.com/
 * 2. Создай новый проект "sfer.ai Forms"
 * 3. Вставь этот код
 * 4. Сохрани и разверни как Web App:
 *    - Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Скопируй URL деплоя — это твой WEBHOOK_URL
 *
 * КОНФИГУРАЦИЯ:
 * - FOLDER_ID: ID папки в Google Drive где будут создаваться таблицы
 * - Чтобы найти ID папки: откройте папку в Google Drive, ID будет в URL после /folders/
 */

// ID папки для хранения таблиц с результатами форм
const FOLDER_ID = '18shVpfBTru6Tngu2eZrixutcmCjB6Th7'; // Замените на реальный ID папки

// Имя файла-реестра форм
const REGISTRY_NAME = '_forms_registry';

/**
 * Обработка POST запросов
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Валидация входных данных
    if (!data.formId) {
      return createResponse({ error: 'formId is required' }, 400);
    }

    if (!data.formData || typeof data.formData !== 'object') {
      return createResponse({ error: 'formData is required' }, 400);
    }

    // Получаем или создаём таблицу для этой формы
    const spreadsheet = getOrCreateSpreadsheet(data.formId, data.formTitle || data.formId);
    const sheet = spreadsheet.getActiveSheet();

    // Получаем заголовки (первая строка)
    const headers = getOrCreateHeaders(sheet, data.formData);

    // Записываем данные
    const row = createRow(headers, data.formData);
    sheet.appendRow(row);

    // Возвращаем успех
    return createResponse({
      success: true,
      spreadsheetId: spreadsheet.getId(),
      spreadsheetUrl: spreadsheet.getUrl(),
      rowNumber: sheet.getLastRow()
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return createResponse({ error: error.message }, 500);
  }
}

/**
 * Обработка GET запросов (для тестирования)
 */
function doGet(e) {
  return createResponse({
    status: 'ok',
    message: 'sfer.ai Forms to Sheets API',
    version: '1.0.0',
    usage: {
      method: 'POST',
      body: {
        formId: 'unique-form-identifier',
        formTitle: 'Human readable form name (optional)',
        formData: {
          field1: 'value1',
          field2: 'value2'
        }
      }
    }
  });
}

/**
 * Получает существующую или создаёт новую таблицу для формы
 */
function getOrCreateSpreadsheet(formId, formTitle) {
  const registry = getRegistry();

  // Проверяем есть ли уже таблица для этой формы
  if (registry[formId]) {
    try {
      const spreadsheet = SpreadsheetApp.openById(registry[formId]);
      return spreadsheet;
    } catch (e) {
      // Таблица была удалена, создадим новую
      console.log('Spreadsheet not found, creating new one');
    }
  }

  // Создаём новую таблицу
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const spreadsheet = SpreadsheetApp.create(`[Form] ${formTitle}`);

  // Перемещаем в нужную папку
  const file = DriveApp.getFileById(spreadsheet.getId());
  file.moveTo(folder);

  // Настраиваем первый лист
  const sheet = spreadsheet.getActiveSheet();
  sheet.setName('Responses');

  // Добавляем метаданные
  const metaSheet = spreadsheet.insertSheet('_meta');
  metaSheet.getRange('A1:B3').setValues([
    ['formId', formId],
    ['formTitle', formTitle],
    ['createdAt', new Date().toISOString()]
  ]);
  metaSheet.hideSheet();

  // Сохраняем в реестр
  registry[formId] = spreadsheet.getId();
  saveRegistry(registry);

  return spreadsheet;
}

/**
 * Получает или создаёт заголовки столбцов
 */
function getOrCreateHeaders(sheet, formData) {
  const lastColumn = sheet.getLastColumn();

  // Базовые заголовки
  const baseHeaders = ['Timestamp'];

  if (lastColumn === 0) {
    // Новая таблица — создаём заголовки из данных формы
    const dataHeaders = Object.keys(formData);
    const allHeaders = [...baseHeaders, ...dataHeaders];

    sheet.getRange(1, 1, 1, allHeaders.length).setValues([allHeaders]);
    sheet.getRange(1, 1, 1, allHeaders.length).setFontWeight('bold');
    sheet.setFrozenRows(1);

    return allHeaders;
  } else {
    // Существующая таблица — читаем заголовки
    const existingHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

    // Проверяем, есть ли новые поля
    const newFields = Object.keys(formData).filter(
      field => !existingHeaders.includes(field)
    );

    if (newFields.length > 0) {
      // Добавляем новые заголовки
      const startColumn = lastColumn + 1;
      sheet.getRange(1, startColumn, 1, newFields.length).setValues([newFields]);
      sheet.getRange(1, startColumn, 1, newFields.length).setFontWeight('bold');
      return [...existingHeaders, ...newFields];
    }

    return existingHeaders;
  }
}

/**
 * Создаёт строку данных в соответствии с заголовками
 */
function createRow(headers, formData) {
  return headers.map(header => {
    if (header === 'Timestamp') {
      return new Date().toISOString();
    }
    return formData[header] || '';
  });
}

/**
 * Получает реестр форм
 */
function getRegistry() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFilesByName(REGISTRY_NAME);

    if (files.hasNext()) {
      const file = files.next();
      const content = file.getBlob().getDataAsString();
      return JSON.parse(content);
    }
  } catch (e) {
    console.log('Registry not found, creating new one');
  }

  return {};
}

/**
 * Сохраняет реестр форм
 */
function saveRegistry(registry) {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const content = JSON.stringify(registry, null, 2);

  // Ищем существующий файл
  const files = folder.getFilesByName(REGISTRY_NAME);

  if (files.hasNext()) {
    const file = files.next();
    file.setContent(content);
  } else {
    folder.createFile(REGISTRY_NAME, content, 'application/json');
  }
}

/**
 * Создаёт CORS-совместимый ответ
 */
function createResponse(data, statusCode = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Тестовая функция для проверки работы
 */
function testSubmission() {
  const testData = {
    formId: 'test-form',
    formTitle: 'Test Form',
    formData: {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test submission'
    }
  };

  // Симулируем POST запрос
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  console.log(result.getContent());
}
