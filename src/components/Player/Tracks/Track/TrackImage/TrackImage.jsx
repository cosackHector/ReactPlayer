import styles from './TrackImage.module.css'

export const TrackImage = ({imageUrl}) => {
    return (
        <div className={styles.container}>
            <img className={styles.trackImage} src={imageUrl} />
        </div>
    );
};