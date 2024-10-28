import styles from './Header.module.css';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderInput } from './HeaderInput/HeaderInput';
import { HeaderAuth } from './Login/HeaderAuth';
import { AudioCustom } from '../common/customAudio/AudioCustom';

export const Header = ({playlist}) => {
    return (
        <header className={styles.container}>
            <HeaderLogo />
            <HeaderInput />
            <AudioCustom playlist={playlist} />
            <HeaderAuth />
        </header>
    );
};