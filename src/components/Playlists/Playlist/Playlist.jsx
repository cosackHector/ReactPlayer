import styles from './Playlist.module.css';
import { PlaylistInfo } from './PlaylistInfo/PlaylistInfo';
import { PlaylistTitle } from './PlaylistTitle/PlaylistTitle';

export const Playlist = ({title, id, trackLength}) => {
    return (
        <div className={styles.container}>
            <PlaylistTitle title={title} id={id} />
            <PlaylistInfo trackLength={trackLength} />
        </div>
    );
};