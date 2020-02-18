import React from 'react';
import PropTypes from 'prop-types';
import GenreCard from '../../components/GenreCard';

const GenrePage = (props) => {
  const {
    songsList, setSongsOfGenre, setIsGenreClicked, setGenre,
  } = props;
  const getSongs = (genre) => {
    const genreSongs = songsList.filter((song) => {
      const { genres } = song;
      if (genres.indexOf(genre) !== -1) {
        return true;
      }
      return false;
    });
    setSongsOfGenre(genreSongs);
    setIsGenreClicked(true);
    setGenre(genre);
  };
  //   const genres = genreList.map((genre) => (
  //     <GenreCard name={genre} imageLink="" getSongs={getSongs} />
  //   ));

  return (
    <div className="Genre-page">
      <p>
        Genres
      </p>
      <div className="Genre-container">
        <GenreCard name="rock" getSongs={() => getSongs('rock')} />
        <GenreCard name="pop" getSongs={() => getSongs('pop')} />
        <GenreCard name="bollywood" getSongs={() => getSongs('bollywood')} />
        <GenreCard name="country" getSongs={() => getSongs('country')} />
      </div>
    </div>
  );
};
GenrePage.propTypes = {
  songsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSongsOfGenre: PropTypes.func.isRequired,
  setIsGenreClicked: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
};
export default GenrePage;
