import React, { useState } from 'react'

import styles from './search-blog.module.scss'

interface SearchBlog {
  className?: string
  themes: string[]
  onSearch: (query: string) => void
}

const SearchBlog = ({ themes, onSearch }: SearchBlog) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('')

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme === selectedTheme ? '' : theme)
    onSearch(theme === selectedTheme ? '' : theme)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    onSearch(query)
  }

  return (
    <nav className={styles.container}>
      <div className={styles['box-navbar']}>
        <ul className={styles['list-themes']}>
          <li
            className={`${styles.text} ${selectedTheme === '' ? styles.active : ''}`}
            onClick={() => handleThemeClick('')}
          >
            Todos
          </li>
          {themes.map((theme, index) => (
            <li
              className={`${styles.text} ${theme === selectedTheme ? styles.active : ''}`}
              key={index}
              onClick={() => handleThemeClick(theme)}
            >
              {theme}
            </li>
          ))}
        </ul>
        <div className={styles['search-section']}>
          <input className={styles.input} type="text" placeholder="Pesquisar" onChange={handleSearchChange} />
        </div>
      </div>
    </nav>
  )
}

export default SearchBlog
