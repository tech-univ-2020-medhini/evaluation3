import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Button from '../Button';


function GenreCard(props) {
  const { name, imageLink, getSongs } = props;
  return (
    <div className="genre-card">
      <img src={imageLink} alt="/" />
      <Button text={name} click={getSongs} />
    </div>

  );
}
GenreCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  getSongs: PropTypes.func.isRequired,
};

export default GenreCard;
