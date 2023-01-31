import React from 'react'
import styles from './search.module.scss'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        placeholder="search"
        value={searchValue}
        type="text"
        className={styles.search}
        onChange={e => setSearchValue(e.target.value)}
      />
    </>
  )
}

export default Search
