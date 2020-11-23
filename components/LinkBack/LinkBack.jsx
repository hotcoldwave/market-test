import styles from './linkback.module.scss';
import Link from 'next/link';

export default function LinkBack(props) {
    return (
        <Link href={`${props.path}`}>
            <a className={styles.linkBack}>{props.text}</a>
        </Link>
    );
}
