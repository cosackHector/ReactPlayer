import { Track } from './Track/Track';
import styles from './Tracks.module.css';


export const Tracks = ({tracks}) => {
    return (
        <div className={styles.container}>
            {tracks.map((track) => <Track key={track.id} track={track}/>)}
        </div>
    );
};