import Card from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';
import styles from '../styles/layout.module.scss';

export default function Devices({ data }) {
    return (
        <main className={styles.siteContainer}>
            <SearchBar />
            <ul className={styles.dataContainer}>
                {data.map((el) => (
                    <Card key={el._id} phone={el} />
                ))}
            </ul>
            <Button text="Добавить товар" path="/add-new" />
        </main>
    );
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/');
    const { data } = await response.json();
    return { props: { data } };
}
