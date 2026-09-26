import { createContext, useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers.jsx";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentUser, loginLS, logoutLS] = useUsers();

  const login = (newUser) => {
    setUser(newUser);
    // Здесь можно сохранить токен в localStorage
    loginLS(newUser);
  };

  const logout = () => {
    setUser(null);
    // Здесь можно удалить токен из localStorage
    logoutLS();
  };
  const value = useMemo(
    () => ({
      user: currentUser.name,
      isAuth: user !== null,
      login,
      logout,
    }),
    [user],
  );
  return <UserContext value={value}>{children}</UserContext>;
}
