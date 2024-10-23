import styles from './HeaderLogo.module.css';
import logo from '../../../assets/icons/logotype.png';
import { LogoTitle } from './LogoTitle/LogoTitle';
import { LogoImage } from './LogoImage/LogoImage';

export const HeaderLogo = () => {
    return (
        <div className={styles.container}>
            <LogoImage />
            <LogoTitle />
        </div>
    );
};