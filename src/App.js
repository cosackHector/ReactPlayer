import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Player } from './components/Player/Player';
import { Navbar } from './components/Navbar/Navbar';
import { Playlists } from './components/Playlists/Playlists';
import { playlists } from './store/store';

export const App = () => {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/playlists' element={<Playlists playlists={playlists}/>}/>
          <Route path='/player' element={<Player playlist={playlists}/>}/>
        </Routes>
    </div>
  );
};