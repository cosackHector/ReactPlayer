import styles from './PlaylistTitle.module.css';
import { NavLink } from 'react-router-dom';
export const PlaylistTitle = ({title, id}) => {
    return (
        <>
            {/* <NavLink className={styles.link} to={`/player_${id}`}> */}
            <NavLink className={styles.link} to={`/player`}>
                <p className={styles.title}>{title}</p>
            </NavLink>
        </>
    );
};