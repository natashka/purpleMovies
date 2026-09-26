import { useLocalStorage } from "./useLocalStorage.jsx";

export function useUsers() {
  // Убедимся, что по дефолту у нас всегда массив, чтобы не было ошибок с .find или .length
  const [users, setUsers] = useLocalStorage("users", []);

  // Ищем залогиненного пользователя
  const currentUser = users?.find((user) => user.isLogined) ?? {
    name: null,
    isLogined: false,
  };

  const loginLS = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    // 1. Проверяем, есть ли уже пользователь с таким именем
    const userExists = users.some((user) => user.name === trimmedName);

    if (!userExists) {
      // 2. Если пользователя нет, сбрасываем флаг у всех остальных и добавляем нового
      const nextUsers = users.map((user) => ({ ...user, isLogined: false }));
      setUsers([...nextUsers, { name: trimmedName, isLogined: true }]);
    } else {
      // 3. Если пользователь есть, переключаем isLogined: true для него, а для остальных — false
      const nextUsers = users.map((user) => {
        return user.name === trimmedName
          ? { ...user, isLogined: true }
          : { ...user, isLogined: false }; // разлогиниваем остальных
      });
      setUsers(nextUsers);
    }
  };

  const logoutLS = () => {
    const nextUsers = users.map((user) => {
      return user.isLogined ? { ...user, isLogined: false } : user;
    });
    setUsers(nextUsers);
  };

  return [currentUser, loginLS, logoutLS];
}
