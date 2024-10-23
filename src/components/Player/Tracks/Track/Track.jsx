import styles from './Track.module.css';

export const Track = ({track}) => {
    return (
        <div className={styles.container}>
            <img src={track.trackImageUrl} />
            <h4>{track.artistName} - {track.title}</h4>
            <audio className={styles.track} controls src={track.fileUrl}/>
        </div>
    );
};