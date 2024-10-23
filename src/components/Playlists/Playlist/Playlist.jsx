import styles from './Playlist.module.css';
import { PlaylistTitle } from './PlaylistTitle/PlaylistTitle';

export const Playlist = ({title, id}) => {
    return (
        <div className={styles.container}>
            <PlaylistTitle title={title} id={id} />
        </div>
    );
};