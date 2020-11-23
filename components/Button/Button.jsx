import styles from './button.module.scss';
import Link from 'next/link';

export default function Button(props) {
    return (
        <Link href={props.path}>
            <a className={styles.button}>{props.text}</a>
        </Link>
    );
}
