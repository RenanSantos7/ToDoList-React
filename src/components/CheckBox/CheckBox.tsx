import styles from './CheckBox.module.css'

interface CheckBoxProps {
    obrigatorio?: boolean
    checked: boolean
    aoMudar: () => void
}

export default function CheckBox({obrigatorio = false, checked, aoMudar}: CheckBoxProps) {
    return (
        <label className={styles.label}>
            <input
                type='checkbox'
                required={obrigatorio}
                className={styles.input}
                onChange={e => aoMudar()}
                checked={checked}
            />
            <div className={styles.checkbox}></div>
        </label>
    )
}
