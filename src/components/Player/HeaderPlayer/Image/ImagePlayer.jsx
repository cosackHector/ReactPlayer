import styles from './ImagePlayer.module.css';

export const ImagePlayer = ({playlist}) => {
    return (
        <div className={styles.container}> 
            <img className={styles.playlistImage} src={playlist.coverImageUrl}/>
        </div>
    );
};
