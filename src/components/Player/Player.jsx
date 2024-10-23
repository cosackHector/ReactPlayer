import { HeaderPlayer } from './HeaderPlayer/HeaderPlayer';
import styles from './Player.module.css';
import { Tracks } from './Tracks/Tracks';

export const Player = ({playlist}) => {
    return (
        <main className={styles.container}>
            <HeaderPlayer playlist={playlist[0]}/>
            <Tracks tracks={playlist[0].tracks}/>
        </main>
    );
};