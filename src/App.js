import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Player } from './components/Player/Player';
import { Navbar } from './components/Navbar/Navbar';
import { Playlists } from './components/Playlists/Playlists';
import LoginForm from './components/Login/LoginForm';

export const App = ({playlists}) => {
  return (
    <div className="App">
        <Header playlist={playlists}/>
        <Navbar />
        <Routes>
          <Route path='/playlists' element={<Playlists playlists={playlists.playlists}/>}/>
          <Route path='/player' element={<Player playlist={playlists.currentPlaylist}/>}/>
          <Route path='/login' element={<LoginForm />}/>
        </Routes>
    </div>
  );
};