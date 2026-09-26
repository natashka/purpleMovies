import { createContext, useMemo } from "react";
import { useUsers } from "../hooks/useUsers.jsx";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [currentUser, loginLS, logoutLS] = useUsers();

  const login = (newUser) => {
    // Здесь можно сохранить токен в localStorage
    loginLS(newUser);
  };

  const logout = () => {
    // Здесь можно удалить токен из localStorage
    logoutLS();
  };
  const value = useMemo(
    () => ({
      user: currentUser.name,
      isAuth: currentUser.name !== null,
      login,
      logout,
    }),
    [currentUser],
  );
  return <UserContext value={value}>{children}</UserContext>;
}
