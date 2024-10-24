import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Player } from './components/Player/Player';
import { Navbar } from './components/Navbar/Navbar';
import { Playlists } from './components/Playlists/Playlists';


export const App = ({playlists}) => {
  console.log(playlists)

  return (
    <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/playlists' element={<Playlists playlists={playlists.playlists}/>}/>
          <Route path='/player' element={<Player playlist={playlists}/>}/>
        </Routes>
    </div>
  );
};