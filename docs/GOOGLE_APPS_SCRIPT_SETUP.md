# Настройка Google Apps Script для приема заявок

## Шаг 1: Откройте вашу Google Таблицу

Перейдите по ссылке к вашей таблице:
https://docs.google.com/spreadsheets/d/1NhYkXHSeWfFFz4eURjvdSzL4pHqqkjZeMAN9CiLevtg/edit

## Шаг 2: Создайте Google Apps Script

1. В таблице нажмите **Расширения** → **Apps Script**
2. Удалите весь код в редакторе
3. Вставьте следующий код:

```javascript
// Главная функция для обработки POST запросов
function doPost(e) {
  try {
    // Получаем активную таблицу
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Парсим данные из запроса
    const data = JSON.parse(e.postData.contents);

    // Подготавливаем строку для записи
    const row = [
      new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }), // Дата и время
      data.jobPosition || 'Product Manager',        // Вакансия
      data.fullName || '',                          // Имя и фамилия
      data.telegram || '',                          // Telegram
      data.location || '',                          // Локация
      data.englishLevel || '',                      // Уровень английского
      data.expectedCompensation || '',              // Ожидаемая компенсация
      data.experience || '',                        // Опыт работы
      data.motivation || '',                        // Мотивация
      data.aiUsage || '',                          // Использование AI
      data.successProject || '',                    // Успешный проект
      data.failureProject || '',                    // Неудачный проект
      data.additionalInfo || ''                     // Дополнительная информация
    ];

    // Добавляем строку в таблицу
    sheet.appendRow(row);

    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // В случае ошибки возвращаем информацию об ошибке
    console.error('Error processing application:', error);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для обработки GET запросов (для тестирования)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'Google Sheets API is running',
      message: 'Use POST method to submit applications'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Функция для настройки заголовков таблицы (запустите один раз)
function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Проверяем, если заголовки уже существуют
  const firstRow = sheet.getRange(1, 1, 1, 13).getValues()[0];
  if (firstRow[0] === 'Дата и время') {
    return; // Заголовки уже настроены
  }

  // Добавляем заголовки
  const headers = [
    'Дата и время',
    'Вакансия',
    'Имя и фамилия',
    'Telegram',
    'Локация',
    'Уровень английского',
    'Ожидаемая компенсация',
    'Опыт работы',
    'Мотивация',
    'Использование AI',
    'Успешный проект',
    'Неудачный проект',
    'Дополнительная информация'
  ];

  sheet.insertRowBefore(1);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Форматируем заголовки
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#005EE0')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold');
}
```

## Шаг 3: Настройте заголовки таблицы

1. В редакторе Apps Script выберите функцию `setupHeaders` в выпадающем списке
2. Нажмите кнопку **▶ Выполнить**
3. Предоставьте необходимые разрешения, если потребуется

## Шаг 4: Развернете Web App

1. Нажмите **Развернуть** → **Новое развертывание**
2. Настройте параметры:
   - **Тип**: Веб-приложение
   - **Описание**: Job Applications Handler
   - **Выполнить как**: Я (ваш email)
   - **У кого есть доступ**: Все
3. Нажмите **Развернуть**
4. **ВАЖНО**: Скопируйте URL веб-приложения (он будет выглядеть примерно так):
   ```
   https://script.google.com/macros/s/AKfycbw.../exec
   ```

## Шаг 5: Обновите URL в коде React

1. Откройте файл:
   ```
   src/pages/JobPages/shared/components/JobApplicationForm/hooks/useJobApplicationSubmit.ts
   ```

2. Замените `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` на полученный URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw.../exec';
   ```

## Шаг 6: Тестирование

1. Откройте URL веб-приложения в браузере - должно показать:
   ```json
   {
     "status": "Google Sheets API is running",
     "message": "Use POST method to submit applications"
   }
   ```

2. Проверьте отправку формы на сайте

## Устранение проблем

### Если форма не отправляется:

1. **Проверьте права доступа**: В настройках развертывания должно быть "У кого есть доступ: Все"
2. **Проверьте URL**: Убедитесь, что скопировали правильный URL из развертывания
3. **Проверьте логи**: В Apps Script редакторе откройте **Выполнения** для просмотра ошибок

### Если данные не появляются в таблице:

1. Убедитесь, что таблица не защищена от редактирования
2. Проверьте, что скрипт имеет доступ к таблице
3. Посмотрите логи выполнения в Apps Script

## Дополнительные настройки

### Уведомления по email

Добавьте эту функцию в код Apps Script для получения уведомлений:

```javascript
function sendNotification(data) {
  const recipient = 'your-email@example.com'; // Замените на ваш email
  const subject = `Новая заявка: ${data.fullName} - ${data.jobPosition}`;
  const body = `
    Получена новая заявка на вакансию ${data.jobPosition}

    Имя: ${data.fullName}
    Telegram: ${data.telegram}
    Локация: ${data.location}
    Ожидаемая компенсация: ${data.expectedCompensation}

    Проверьте Google Таблицу для полной информации.
  `;

  MailApp.sendEmail(recipient, subject, body);
}
```

И вызовите её в doPost после добавления строки:
```javascript
sendNotification(data);
```

## Безопасность

- Скрипт автоматически предотвращает SQL-инъекции, так как использует Apps Script API
- Данные валидируются на клиенте перед отправкой
- Рекомендуется добавить rate limiting для предотвращения спама