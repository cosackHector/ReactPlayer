import { useDispatch, useSelector } from 'react-redux';
import styles from './PlaylistTitle.module.css';
import { NavLink } from 'react-router-dom';
import { setCurrentPlaylist } from '../../../../store/playlistsReducer';





export const PlaylistTitle = ({title, id}) => {
    const dispatch = useDispatch()

    const onSetCurrentPlaylist = () => {
        dispatch(setCurrentPlaylist(id))
    }
    return (
        <>
            <NavLink className={styles.link} to={`/player`}>
                <p onClick={onSetCurrentPlaylist} className={styles.title}>{title}</p>
            </NavLink>
        </>
    );
};