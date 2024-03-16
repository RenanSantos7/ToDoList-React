import styles from './CheckBox.module.css'

interface CheckBoxProps {
    obrigatorio?: boolean
    aoMudar: () => void
}

export default function CheckBox({obrigatorio = false, aoMudar}: CheckBoxProps) {
    return (
        <label className={styles.label}>
            <input
                type='checkbox'
                required={obrigatorio}
                className={styles.input}
                onChange={e => aoMudar()}
            />
            <div className={styles.checkbox}></div>
        </label>
    )
}
