import styles from './Track.module.css';
import { TrackImage } from './TrackImage/TrackImage';
import { TrackTitle } from './TrackTitle/TrackTitle';
import { store } from '../../../../store/redux_store';

export const Track = ({track}) => {
    console.log(store.getState())
    return (
        <div className={styles.container}>
            <TrackImage imageUrl={track.trackImageUrl}/>
            <div className={styles.trackContainer}>
                <TrackTitle track={track}/>
                <audio className={styles.track} controls src={track.fileUrl}/>
            </div>
        </div>
    );
};



