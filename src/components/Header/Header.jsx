import styles from './Header.module.css';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderInput } from './HeaderInput/HeaderInput';
import { HeaderAuth } from './Login/HeaderAuth';

export const Header = () => {
    return (
        <header className={styles.container}>
            <HeaderLogo />
            <HeaderInput />
            <HeaderAuth />
        </header>
    );
};