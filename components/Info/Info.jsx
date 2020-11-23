import styles from './info.module.scss';
import LinkBack from '../LinkBack/LinkBack';

export default function Info(props) {
    const { phone } = props;
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <header className={styles.header}>
                    <h2>{phone.model}</h2>
                    <p className={styles.description}>{phone.description}</p>
                </header>
                <ul className={styles.characteristics}>
                    <li>Диагональ: {phone.characteristics.display} дюймов</li>
                    <li>Память: {phone.characteristics.memory} Гб.</li>
                    <li>Цвет: {phone.characteristics.color}</li>
                    <li>Цена: {phone.characteristics.price} ₽</li>
                </ul>

                <p className={styles.linkBack}>
                    <LinkBack path="/" text="Назад" />
                </p>
            </div>
        </div>
    );
}
