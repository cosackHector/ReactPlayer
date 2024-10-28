import { NavLink } from 'react-router-dom';
import styles from './AuthButton.module.css';

export const AuthButton = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <NavLink to='/login'>войти</NavLink>
            </button>
        </div>
    );
};