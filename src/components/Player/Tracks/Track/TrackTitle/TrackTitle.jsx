import styles from './TrackTitle.module.css';

export  const TrackTitle = ({track}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{track.artistName} - {track.title}</p>
        </div>
    );
};
