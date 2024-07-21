import React, { useState } from "react";
import styles from "./navbar-blog.module.scss";
import { Icons } from "@/presentation/assets";

// Define o tipo para os temas e a função de pesquisa
interface NavbarBlogProps {
  className?: string;
  themes: string[];
  onSearch: (query: string) => void;
}

export function NavbarBlog({ themes, onSearch }: NavbarBlogProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("");

  // Tipifique o evento como React.ChangeEvent<HTMLInputElement>
  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme === selectedTheme ? "" : theme);
    onSearch(theme === selectedTheme ? "" : theme);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <nav className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_navbar}>
        <ul className={styles.list_themes}>
          <li
            className={`${styles.text} ${
              selectedTheme === "" ? styles.active : ""
            }`}
            onClick={() => handleThemeClick("")}
          >
            Todos
          </li>
          {themes.map((theme, index) => (
            <li
              className={`${styles.text} ${
                theme === selectedTheme ? styles.active : ""
              }`}
              key={index}
              onClick={() => handleThemeClick(theme)}
            >
              {theme}
            </li>
          ))}
        </ul>

        <div className={styles.search_container}>
          <input
            className={styles.btn}
            type="text"
            placeholder="Pesquisar"
            onChange={handleSearchChange}
          />
          <div className={styles.searchIcon}>
            <Icons.FaArrowLeft />
          </div>
        </div>
      </div>
    </nav>
  );
}
