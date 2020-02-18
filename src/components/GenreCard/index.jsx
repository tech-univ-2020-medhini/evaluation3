import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';


function GenreCard(props) {
  const { name, imageLink, getSongs } = props;
  return (
    <div className="GenreCard">
      <img src={imageLink} alt="/" />
      {/* <Link to="/songs?genre=:name"> */}
      <Button text={name} click={getSongs} />
      {/* </Link> */}
    </div>

  );
}
GenreCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  getSongs: PropTypes.func.isRequired,
};

export default GenreCard;
