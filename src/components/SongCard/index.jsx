import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';
import bearerToken from '../../env';
import './index.css';


function SongCard(props) {
  const {
    id, title, artists, imageLink,
  } = props;
  let artistStr;
  if (artists !== []) {
    artistStr = artists.join(' ');
  } else {
    artistStr = '';
  }

  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const getLikes = async () => {
      const response = await axios.get(`/api/records/${id}/love`, {
        headers: {
          Authorization: bearerToken,
        },
      });
      setLikes(response.data.data.count);
    };
    getLikes();
  }, []);
  const likesClick = () => {
    const patchLikes = async () => {
      axios.patch(`/api/records/${id}/love`, {
        count: likes + 1,
      }, {
        headers: {
          Authorization: bearerToken,
        },
      });
      setLikes(likes + 1);
    };
    patchLikes();
  };

  return (
    <div className="song-card">
      <img src={imageLink} alt="/" />

      <p>
        {title}
      </p>
      <p>
        {artistStr}
      </p>
      <Button text={likes} click={likesClick} />
    </div>

  );
}
SongCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageLink: PropTypes.string.isRequired,
};

export default SongCard;
