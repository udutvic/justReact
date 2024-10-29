"use client";

import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#183243] text-white p-6 min-h-screen w-64">
      <h2 className="text-2xl font-semibold mb-6">Модуль 1</h2>
      <h3 className="text-xl font-semibold mb-4">Основи React</h3>
      <ul className="space-y-3">
        <li className="pl-4 border-l-4 border-green-500">
          <span className="font-medium">Магія React</span>
        </li>
        <li className="pl-4 border-l-4 border-green-500">
          <span className="font-medium">Привіт React</span>
        </li>
        <li className="pl-8 text-gray-400">Створіть свій власний React</li>
        <li className="pl-4 border-l-4 border-green-500">
          <span className="font-medium">Розуміння JSX</span>
        </li>
        <li className="pl-8 text-gray-400">Виразні слоти</li>
        <li className="pl-8 text-gray-400">Відмінності від HTML</li>
        <li className="pl-8 text-gray-400">Виправте конвертер</li>
        <li className="pl-8 text-gray-400">The Whitespace Gotcha</li>
        <li className="pl-8 text-gray-400">Вправи</li>
        <li className="pl-4 border-l-4 border-green-500">
          <span className="font-medium">JSX проти шаблонів</span>
        </li>
        <li className="pl-4 border-l-4 border-green-500">
          <span className="font-medium">Компоненти</span>
        </li>
        <li className="pl-8 text-gray-400">Мислення в компонентах</li>
        <li className="pl-8 text-gray-400">Базовий синтаксис</li>
        <li className="pl-8 text-gray-400">Реквізит</li>
        <li className="pl-8 text-gray-400">The Children Prop</li>
      </ul>
      <div className="mt-6 text-sm text-gray-400">
        Виконано на <span className="font-semibold text-green-400">93%</span>
      </div>
    </div>
  );
};

export default Sidebar;
