import styles from './Navbar.module.css';
import playlists from '../../assets/icons/playlists.png';
import favorite from '../../assets/icons/favorite.png';
import top from '../../assets/icons/top.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div>
                <NavLink to="/playlists">
                    <img className={styles.playlists} src={playlists} />
                </NavLink>
            </div>
            <div>
                <a href='#'>
                    <img className={styles.favorite} src={favorite} />
                </a>
            </div>
            <div>
                <a href='#'>
                    <img className={styles.top} src={top} />
                </a>
            </div>
        </nav>
    );
};