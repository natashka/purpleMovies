import { useLocalStorage } from "./useLocalStorage.jsx";

export function useUsers() {
  const [users, setUsers] = useLocalStorage("users");

  const currentUser = users.find((user) => user.isLogined) ?? {
    name: "",
    isLogined: false,
  };

  const login = (name) => {
    if (!users.length) {
      setUsers([{ name: name, isLogined: true }]);
    } else {
      const nextUsers = users.map((user) => {
        return user.name === name ? { ...user, isLogined: true } : user;
      });
      setUsers([...nextUsers]);
    }
  };
  const logout = () => {
    const nextUsers = users.map((user) => {
      return user.isLogined ? { ...user, isLogined: false } : user;
    });
    setUsers([...nextUsers]);
  };

  return [currentUser, login, logout];
}
