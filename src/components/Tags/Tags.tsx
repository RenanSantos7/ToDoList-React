import styles from './Tags.module.css'

interface TagProps {
    titulo: string;
}

export default function Tags({ titulo }: TagProps) {
    return (
        <span className={styles.tag}>
            {titulo}
        </span>
    );
}
