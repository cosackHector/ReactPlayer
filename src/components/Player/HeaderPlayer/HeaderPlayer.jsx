import styles from './HeaderPlayer.module.css';
import { ImagePlayer } from './Image/ImagePlayer';
import { Details } from './Details/Details';

export const HeaderPlayer = ({playlist}) => {
    return (
        <header className={styles.header}>
            <ImagePlayer playlist={playlist}/>
            <Details playlist={playlist}/>
        </header>
    );
};