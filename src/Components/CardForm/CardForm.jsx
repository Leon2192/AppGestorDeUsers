import styles from './CardForm.module.css';

const CardForm = ({children}) => {
    return(
        <div className={styles.card}>
            {children}
        </div>
    )
}
export default CardForm;