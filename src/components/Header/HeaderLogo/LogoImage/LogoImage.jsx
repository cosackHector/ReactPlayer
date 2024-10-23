import { NavLink } from 'react-router-dom';
import styles from './LogoImage.module.css';
import logo from '../../../../assets/icons/logot.png';

export const LogoImage = () => {
    return (
        <>
            <img className={styles.logo} src={logo}></img>
        </>
    )
};