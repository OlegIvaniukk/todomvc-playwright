# TodoMVC Playwright Automation

## Опис проекту

Автоматизація CRUD-функціоналу TodoMVC за допомогою Playwright + TypeScript.  
Тести реалізовані за **Page Object Model (POM)**.

**Особливості:**

- Playwright + TypeScript
- HTML Reporter
- Prettier для форматування коду
- Підтримка environment variables через `.env`

---

## Встановлення та запуск

1. Клонувати репозиторій:

```bash
git clone https://github.com/OlegIvaniukk/todomvc-playwright.git
cd todomvc-playwright
Встановити залежності:

npm install
npx playwright install
Створити .env файл у корені з базовим URL:

BASE_URL=https://todomvc.com/examples/react/
Запуск тестів:

npm test               # запуск всіх тестів
npm run test:headed    # запуск у візуальному режимі
npm run report         # створення HTML-звіту
npx playwright show-report  # перегляд звіту у браузері
Структура проекту
pages/                # Page Object класи
tests/                # Тести
playwright.config.ts  # Конфігурація Playwright
.husky/               # Git hooks (pre-push)
.env                  # Environment variables

HTML-звіт та скріншоти
HTML-звіт Playwright зберігається у playwright-report/

Скріни та відео можна зберігати при налаштуванні screenshot та video у playwright.config.ts.

Примітки
Тести запускаються на Chromium за замовчуванням.

Для запуску на Firefox або WebKit, змініть projects у playwright.config.ts.

При потребі можна додати Husky pre-push для ESLint, щоб блокувати пуші при помилках у коді.

**Версії:**
- Node.js >= 18
- Playwright 1.58.0
- TypeScript >= 5.0
- Prettier >= 3.8.1
```
