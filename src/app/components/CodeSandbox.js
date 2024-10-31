"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const tabTitles = ['/index.js', '/index.html'];
    tabTitles.forEach(title => {
      const tab = document.querySelector(`[title="${title}"]`);
      if (tab) {
        tab.addEventListener('focus', () => {
          tab.parentElement.style.outline = 'none';
        });
      }
    });
  }, []);

  return (
    <Sandpack
      theme={nightOwl} // Темна тема
      template="react"
      options={{
        // showNavigator: true, // Відображення навігатора для файлів (як на зображенні)
        showTabs: true, // Вкладки з файлами
        showLineNumbers: true, // Номери рядків для кращої орієнтації
        wrapContent: true, // Перенос контенту в редакторі
        editorHeight: 400, // Висота редактора
        resizablePanels: true, // Панелі, які можна змінювати розмір
      }}
      files={{
        '/index.js': `// 1. Import dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Create a React element
const element = React.createElement(
  'p',
  { id: 'hello' },
  'Hello World!'
);

// 3. Render the application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);`,

        '/index.html': {
          code: `<html>
<body>
  <div id="root"></div>
</body>
</html>`,
          readOnly: true, // Неможливість редагування
          hidden: false, // Відображення вкладки
          active: true, // Активна вкладка за замовчуванням
        }
      }}
      style={{
        height: "600px", // Загальна висота контейнера Sandpack
        border: "1px solid #333", // Додаємо рамку, щоб відокремити компонент
        borderRadius: "8px", // Округлені кути для привабливого вигляду
        overflow: "hidden", // Щоб прибрати зайвий скролл
      }}
    />
  );
};
