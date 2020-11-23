import styles from './card.module.scss';
import Link from 'next/link';

export default function Card({ phone }) {
    return (
        <li className={styles.card}>
            <div className={styles.cardHeader}>
                <Link href={`/devices/${phone._id}`}>
                    <a className={styles.link}>{phone.model}</a>
                </Link>
                <p className={styles.price}>{phone.characteristics.price} ₽</p>
            </div>
            <p className={styles.description}>{phone.description}</p>
        </li>
    );
}
