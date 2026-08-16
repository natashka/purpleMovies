import { MenuHeader } from "../../layouts/menuHeader/MenuHeader.jsx";
import { Main } from "../../layouts/main/Main.jsx";
import { Header } from "../../components/header/Header.jsx";
import { Paragraph } from "../../components/paragraph/Paragraph.jsx";
import { Search } from "../../components/search/Search.jsx";
import { Button } from "../../components/button/Button.jsx";
import { useState } from "react";
import { CardList } from "../../components/cardList/CardList.jsx";

export function MainPage() {
  const [value, setValue] = useState("");
  const onSearch = (val) => {
    console.log(`Found: ${val}`);
  };
  return (
    <>
      <MenuHeader />
      <Main>
        <div className="search-frame" style={{ paddingLeft: "60px" }}>
          <div className="frame" style={{ maxWidth: "588px" }}>
            <Header text="Поиск" />
            <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
          </div>
          <div
            className="search"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <Search
              isComplex={true}
              name="search"
              placeholder="Введите название"
              value={value}
              onChange={(e) => {
                e.preventDefault();
                setValue(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                onSearch(value);
                setValue("");
              }}
              text="Искать"
            />
          </div>
        </div>
        <CardList />
      </Main>
    </>
  );
}
