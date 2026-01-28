# Очистка кеша в Timeweb Cloud

## Для статических сайтов (Frontend Apps)

В Timeweb Cloud Apps **нет отдельной кнопки "очистить кеш"**. Используется система деплоев.

### Способ 1: Новый деплой (рекомендуется)
1. Зайти в [панель управления Timeweb Cloud](https://timeweb.cloud/my/)
2. Перейти в раздел **Apps** → выбрать приложение
3. Нажать кнопку **"Запустить деплой"** или сделать новый коммит (если включён автодеплой)

При каждом новом деплое frontend-приложения создаются свежие статические файлы на сервере — это эквивалентно очистке кеша на стороне сервера.

### Способ 2: Bump версии в коммите
Изменение версии в `package.json` или добавление query-параметров к ассетам инвалидирует кеш:
```bash
git commit -m "chore: bump version to force cache invalidation"
```

## Для CDN кеша браузера

Если кеш застрял на стороне пользователя:
- **Ctrl + Shift + R** — жёсткая перезагрузка страницы
- **Ctrl + Shift + Del** → очистить кеш браузера

## Если используете CloudFlare

В панели CloudFlare:
1. **Caching** → **Configuration**
2. **Purge Cache** → **Purge Everything** или укажите конкретные URL

## Полезные ссылки
- [App Platform: принципы работы](https://timeweb.cloud/docs/apps/how-it-works)
- [Управление Apps в панели](https://timeweb.cloud/docs/apps/upravlenie-apps-v-paneli)
- [Сброс кэша браузера](https://timeweb.cloud/docs/general/sbros-kehsha-brauzera)
