"use client"
import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    
    
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Find a doctor at your own ease</h2>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search doctors"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;