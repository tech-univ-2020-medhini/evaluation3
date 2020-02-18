import React from 'react';
import PropTypes from 'prop-types';
import SongCard from '../../components/SongCard';

const SongPage = (props) => {
  const { songsOfGenre, genreName } = props;
  let songs;
  if (songsOfGenre !== undefined) {
    songs = songsOfGenre.map((song) => (
      <SongCard id={song.id} title={song.name} artists={song.artists} imageLink={song.albumArtUrl} />
    ));
  }


  return (
    <div className="Song-page">
      <p>
        {genreName}
      </p>
      <div className="Songs-container">
        {songs}
      </div>
    </div>
  );
};
SongPage.propTypes = {
  genreName: PropTypes.string.isRequired,
  songsOfGenre: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SongPage;
