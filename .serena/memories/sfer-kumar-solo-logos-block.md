# Блок "Будем изучать и использовать" - Логотипы инструментов

## Расположение
**Файл:** `src/pages/SferKumarSoloPage/components/SferKumarSoloPage.tsx`  
**Строки:** 266-317

## Структура

### Desktop (lg+)
- **Контейнер:** `max-w-[1274px] h-[171px]`
- **Расположение:** 2 ряда (6 + 5 логотипов)
- **Размеры:** `h-12` (48px) для Make/ChatGPT, `h-10` (40px) для остальных
- **Gap:** `gap-10` (40px)

### Mobile (до lg)
- **Расположение:** 4 ряда (3-3-3-2)
  - Ряд 1: Make, Cursor, ChatGPT
  - Ряд 2: Claude, Claude Code, Higgsfield
  - Ряд 3: Gamma, Gemini, GitHub
  - Ряд 4: n8n, Supabase
- **Размеры:** `h-10` (40px) для Make/ChatGPT, `h-9` (36px) для остальных
- **Gap:** `gap-5` (20px)

## Логотипы (11 штук)
Импорты из `../assets/`:
- logo-make.svg
- logo-cursor.svg
- logo-chatgpt.svg
- logo-claude.svg
- logo-claudecode.svg
- logo-higgsfield.svg
- logo-gamma.svg
- logo-gemini.svg
- logo-github.svg
- logo-n8n.svg
- logo-supabase.svg

## История изменений
- Начальная версия: единый flex-wrap layout для всех экранов
- Итерация 1: Разделены desktop/mobile layouts, добавлен контейнер 1274x171px для desktop
- Итерация 2: Увеличены размеры логотипов на desktop (h-12/h-10)
- Итерация 3: Mobile изменён на 3-3-3-2 (было 4-2-4-1), уменьшены размеры чтобы не выходили за экран
- Итерация 4: Увеличены размеры на mobile до h-9/h-10
