import styles from './searchBar.module.scss';
import React from 'react';

export default function SearchBar(props) {
    const { onSubmit, register } = props;
    return (
        <form action="#" className={styles.searchForm} onSubmit={onSubmit}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Apple iPhone 11.."
                    name="searchQuery"
                    className={styles.searchInput}
                    ref={register}
                />
                <input type="submit" name="search" value="Найти" className={styles.searchButton} />
            </div>

            <div className={styles.filters}>
                <span>от &nbsp;</span>
                <input
                    type="number"
                    min="0"
                    name="minPrice"
                    placeholder="0 ₽"
                    className={styles.filterInput}
                    ref={register}
                />
                <span> — </span>
                <input
                    type="number"
                    min="0"
                    name="maxPrice"
                    placeholder="10000 ₽"
                    className={styles.filterInput}
                    ref={register}
                />
            </div>
        </form>
    );
}
