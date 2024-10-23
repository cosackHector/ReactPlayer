import { Playlist } from './Playlist/Playlist';
import styles from './Playlists.module.css';

export const Playlists = ({playlists}) => {
    return (
        <main className={styles.container}>
            {playlists.map((playlist) => <Playlist title={playlist.title} id={playlist.id} />)}
        </main>
    );
};