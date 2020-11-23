import styles from './searchBar.module.scss';
import React from 'react';

export default function SearchBar() {
    return (
        <form action="#">
            <input type="text" placeholder="Apple..." name="search" className={styles.input} />
        </form>
    );
}
