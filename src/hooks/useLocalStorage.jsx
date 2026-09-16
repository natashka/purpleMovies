import { useState } from "react";

export function useLocalStorage(key) {
  // Инициализируем стейт СИНХРОННО с помощью функции-колбэка
  const [data, setData] = useState(() => {
    try {
      const savedData = localStorage.getItem(key);
      // Если данные есть, парсим их, если нет — возвращаем пустой массив []
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error("Ошибка чтения из localStorage:", error);
      return [];
    }
  });

  const saveData = (newData) => {
    try {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      console.error("Ошибка записи в localStorage:", error);
    }
  };

  return [data, saveData];
}
