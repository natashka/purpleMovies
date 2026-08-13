import { MenuHeader } from "../../layouts/menuHeader/MenuHeader.jsx";
import { Main } from "../../layouts/main/Main.jsx";
import { Header } from "../../components/header/Header.jsx";
import { Paragraph } from "../../components/paragraph/Paragraph.jsx";
import { Input } from "../../components/input/Input.jsx";
import { Button } from "../../components/button/Button.jsx";
import { useState } from "react";

export function MainPage() {
  const [value, setValue] = useState("");
  return (
    <>
      <MenuHeader />
      <Main>
        <div className="search-frame" style={{ paddingLeft: "120px" }}>
          <div className="frame" style={{ maxWidth: "588px" }}>
            <Header text="Поиск" />
            <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
          </div>
          <div
            className="search"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <Input
              isComplex={true}
              name="search"
              placeholder="Введите название"
              value={value}
              onChange={(e) => {
                e.preventDefault();
                setValue(e.target.value);
              }}
            />
            <Button onClick={() => setValue("")} text="Искать" />
          </div>
        </div>
      </Main>
    </>
  );
}
