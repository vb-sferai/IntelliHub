// ===== НАСТРОЙКИ amoCRM =====
const AMOCRM_DOMAIN = 'solokumipro';
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiYWZkNjY2ZDcxYWI5NWFkZGNhMTJkMWQzY2NjZTNhODIwYjIzZDNjZDM3NTgyM2U3MjkzY2NiOGUxYTNhOWNiYTg5NmJkMTY4NDRlNzM2In0.eyJhdWQiOiJkZmI5MDJkMi03YmZlLTRhZWMtOTA1NC0xZWUzYmIyMTk2YTIiLCJqdGkiOiIwYmFmZDY2NmQ3MWFiOTVhZGRjYTEyZDFkM2NjY2UzYTgyMGIyM2QzY2QzNzU4MjNlNzI5M2NjYjhlMWEzYTljYmE4OTZiZDE2ODQ0ZTczNiIsImlhdCI6MTc2Nzg3NjY4OSwibmJmIjoxNzY3ODc2Njg5LCJleHAiOjE4MDQyMDQ4MDAsInN1YiI6Ijk3MjQxNTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzExMTk0NzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwYjgxZmQ4Mi05NTUyLTRmM2QtYmE1MC0zYTcyZjJmN2Y5YjMiLCJ1c2VyX2ZsYWdzIjowLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.IkuPsr2lFUYNBnzUljqxFNq4X1xVoDXkAhnRCqAuEhbn_JZY9YZN7M1D8EpSIp2J74IihpP2NndN4ddHjnCn2n4MJFCzFLEaY06-yd5XAGNui23vKHFsSQ5x-kdGHQLL3rGzpOc2W7VkiOLqx40y8NN8v_O4otqYuM_8sLXeEHOANnZGEsVn71vKxDc6pT8T6hQDWkiDrnej-rs464j5nVfv3V1t2yBw5CgYZ21M0IeZf4DZ6BIl1ysgcaOQGxozOJwDqUL4t3z75ghNYdLjHxO-Yxvuq_9jEdPuSbMt0_-3tXT9XHzB7eVKnnB-QhLdhLjjHADcoYa7s4IRX6W1QQ';

// ===== НАСТРОЙКИ Google Sheets =====
const SPREADSHEET_ID = '1O2CcIr_vllnP076hMlhiZfgBVk7nBTCWE88CCWveAHw';

// ===== НАСТРОЙКИ ВОРОНКИ AmoCRM =====
const DEFAULT_PIPELINE_ID = 10453234;  // AI VIBE ACADEMY 1.0
const DEFAULT_STATUS_ID = 82557350;    // Новый лид

// ID полей в amoCRM
const FIELD_IDS = {
  telegram: 1038321,
  utm_source: 1019739,
  utm_medium: 1019741,
  utm_campaign: 1019743,
  utm_content: 825919,
  utm_term: 825927
};

// ===== ОСНОВНОЙ ОБРАБОТЧИК =====
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, phone, telegram, utm_source, utm_medium, utm_campaign, utm_content, utm_term, pipeline_id, status_id } = data;

    if (!name || !phone) {
      return createResponse({ success: false, error: 'Имя и телефон обязательны' });
    }

    // Записываем в Google Sheets
    addToGoogleSheets(name, phone, telegram, { utm_source, utm_medium, utm_campaign, utm_content, utm_term });

    // Отправляем в amoCRM (с указанием воронки и этапа)
    const result = addToAmoCRM(name, phone, telegram, {
      utm_source, utm_medium, utm_campaign, utm_content, utm_term
    }, {
      pipeline_id: pipeline_id || DEFAULT_PIPELINE_ID,
      status_id: status_id || DEFAULT_STATUS_ID
    });

    return createResponse({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return createResponse({ success: false, error: error.message });
  }
}

// ===== ЗАПИСЬ В GOOGLE SHEETS =====
function addToGoogleSheets(name, phone, telegram, utm) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const timestamp = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

    sheet.appendRow([
      timestamp,
      name,
      phone,
      telegram || '',
      utm.utm_source || '',
      utm.utm_medium || '',
      utm.utm_campaign || '',
      utm.utm_content || '',
      utm.utm_term || ''
    ]);

    console.log('Added to Google Sheets:', name, phone);
  } catch (error) {
    console.error('Google Sheets error:', error);
  }
}

// ===== ДОБАВЛЕНИЕ В AMOCRM (через /leads/complex) =====
function addToAmoCRM(name, phone, telegram, utm, pipelineSettings) {
  const url = `https://${AMOCRM_DOMAIN}.amocrm.ru/api/v4/leads/complex`;

  // Кастомные поля для сделки
  const leadCustomFields = [];

  if (telegram) {
    leadCustomFields.push({
      field_id: FIELD_IDS.telegram,
      values: [{ value: telegram }]
    });
  }

  if (utm.utm_source) leadCustomFields.push({ field_id: FIELD_IDS.utm_source, values: [{ value: utm.utm_source }] });
  if (utm.utm_medium) leadCustomFields.push({ field_id: FIELD_IDS.utm_medium, values: [{ value: utm.utm_medium }] });
  if (utm.utm_campaign) leadCustomFields.push({ field_id: FIELD_IDS.utm_campaign, values: [{ value: utm.utm_campaign }] });
  if (utm.utm_content) leadCustomFields.push({ field_id: FIELD_IDS.utm_content, values: [{ value: utm.utm_content }] });
  if (utm.utm_term) leadCustomFields.push({ field_id: FIELD_IDS.utm_term, values: [{ value: utm.utm_term }] });

  // Формируем payload для /leads/complex
  const payload = [{
    name: `Заявка от ${name}`,
    pipeline_id: pipelineSettings.pipeline_id,
    status_id: pipelineSettings.status_id,
    custom_fields_values: leadCustomFields.length > 0 ? leadCustomFields : undefined,
    _embedded: {
      contacts: [{
        name: name,
        custom_fields_values: [{
          field_code: 'PHONE',
          values: [{ value: phone }]
        }]
      }]
    }
  }];

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const responseCode = response.getResponseCode();
  const responseText = response.getContentText();

  console.log('amoCRM Response:', responseCode, responseText);

  if (responseCode >= 400) {
    throw new Error(`amoCRM error (${responseCode}): ${responseText}`);
  }

  return JSON.parse(responseText);
}

// ===== УТИЛИТЫ =====
function createResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== ДЛЯ ТЕСТИРОВАНИЯ =====
function testAddLead() {
  const result = addToAmoCRM('Тест Воронки', '+79001234567', '@test_pipeline', {
    utm_source: 'test',
    utm_medium: 'test_medium',
    utm_campaign: 'test_campaign'
  }, {
    pipeline_id: DEFAULT_PIPELINE_ID,
    status_id: DEFAULT_STATUS_ID
  });

  addToGoogleSheets('Тест Воронки', '+79001234567', '@test_pipeline', {
    utm_source: 'test',
    utm_medium: 'test_medium',
    utm_campaign: 'test_campaign'
  });

  console.log('Result:', result);
}
