import styles from './AuthButton.module.css';

export const AuthButton = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>войти</button>
        </div>
    );
};