# Language Routing Configuration

## Domains

| Domain | Branch | Purpose |
|--------|--------|---------|
| `sfer.ai` | `supreme_main_eng` | English + auto-redirect for RU users |
| `en.sfer.ai` | `supreme_main_eng` | English (explicit, no redirect) |
| `ru.sfer.ai` | `supreme_main_ru_products` | Russian |

## DNS Configuration (Timeweb Cloud / GoDaddy)

| Type | Host | IP |
|------|------|----|
| A | sfer.ai | 80.90.179.176 |
| A | en.sfer.ai | 80.90.179.176 |
| A | ru.sfer.ai | 82.97.243.54 |

## Redirect Logic (index.html in supreme_main_eng)

The redirect script uses **two detection methods**:

1. **Browser language** (`navigator.languages`) — Chrome, Safari, Edge
2. **Timezone** (`Intl.DateTimeFormat().resolvedOptions().timeZone`) — Firefox fix

```javascript
if (window.location.hostname === 'sfer.ai') {
  const isRussianLang = navigator.languages.some(lang => lang.startsWith('ru'));
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isRussianTimezone = timezone.includes('Moscow') || timezone.includes('Minsk') || ...;
  
  if (isRussianLang || isRussianTimezone) {
    window.location.href = 'https://ru.sfer.ai' + path;
  }
}
```

## Covered Timezones

- **Russia**: Europe/Moscow, Europe/Kaliningrad, Europe/Samara, Europe/Volgograd, Asia/Yekaterinburg, Asia/Omsk, Asia/Novosibirsk, Asia/Krasnoyarsk, Asia/Irkutsk, Asia/Vladivostok
- **Belarus**: Europe/Minsk
- **Kazakhstan**: Asia/Almaty

## Why Timezone Detection?

Firefox doesn't auto-include system language in `navigator.languages`. Even with Russian Firefox UI, it may return `["en-US", "en"]`. Timezone solves this.

## SEO (hreflang tags)

Both branches have hreflang tags in `index.html`:

```html
<link rel="alternate" hreflang="en" href="https://sfer.ai/" />
<link rel="alternate" hreflang="ru" href="https://ru.sfer.ai/" />
<link rel="alternate" hreflang="x-default" href="https://sfer.ai/" />
```

## Current Routes (supreme_main_eng branch)

| Route | Page | Purpose |
|-------|------|---------|
| `/` | SupremeMainPage | English landing page |
| `/teams` | MainPage | Team training page |
| `/automations` | AutomationsPage | B2B AI Automations services |
| `*` | NotFoundPage | 404 page (Cursor IDE style) |

## Important Notes

- `en.sfer.ai` = alias to same server as `sfer.ai`, but no redirect (hostname check)
- English-speaking users in CIS will be redirected to Russian; they can use `en.sfer.ai`
- SSL certificates must be configured separately for each domain on respective servers
- `/automations` shows the same AutomationsPage on all domains (no language switching)
