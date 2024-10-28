import { HeaderPlayer } from './HeaderPlayer/HeaderPlayer';
import styles from './Player.module.css';
import { Tracks } from './Tracks/Tracks';

export const Player = (props) => {
    return (
        <main className={styles.container}>
            <HeaderPlayer playlist={props.playlist}/>
            <Tracks tracks={props.playlist.tracks}/>
        </main>
    );
};
