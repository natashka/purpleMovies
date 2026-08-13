import { MenuHeader } from "../../layouts/menuHeader/MenuHeader.jsx";
import { Input } from "../../components/input/Input.jsx";
import { Button } from "../../components/button/Button.jsx";
import { useState } from "react";

export function LogInPage() {
  const [username, setUsername] = useState("");
  return (
    <>
      <MenuHeader />
      <div
        className="login"
        style={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          alignItems: "left",
          maxWidth: "384px",
        }}
      >
        <Input
          isComplex={false}
          name="login"
          placeholder="Введите имя"
          value={username}
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <Button onClick={() => setValue("")} text="Войти в профиль" />
      </div>
    </>
  );
}
