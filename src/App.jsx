import React, { useState } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import GenrePage from './containers/GenrePage';
import SongPage from './containers/SongPage';

function App() {
  const [isSyncClicked, setIsSyncClicked] = useState(false);
  const [isGenreClicked, setIsGenreClicked] = useState(false);
  const [genre, setGenre] = useState('');
  const [songsList, setSongsList] = useState([]);
  const [songsOfGenre, setSongsOfGenre] = useState([]);
  return (
    <div className="App">
      <header className="header" />
      <div className="body">
        {
          // eslint-disable-next-line no-nested-ternary
          isSyncClicked ? isGenreClicked ? (<SongPage songsOfGenre={songsOfGenre} genreName={genre} />)
            : (<GenrePage setIsGenreClicked={setIsGenreClicked} songsList={songsList} setSongsOfGenre={setSongsOfGenre} setGenre={setGenre} />)
            : (<HomePage setIsSyncClicked={setIsSyncClicked} setSongsList={setSongsList} />)
        }

      </div>

    </div>
  );
}

export default App;
