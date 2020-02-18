import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';


function SongCard(props) {
  const {
    id, title, artists, imageLink,
  } = props;
  let artistStr;
  if (artists.isArray()) {
    artistStr = artists.join(' ');
  } else {
    artistStr = '';
  }

  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const getLikes = async () => {
      const response = await axios.get(`http://ec2-13-232-225-51.ap-south-1.compute.amazonaws.com/api/records/${id}/love`, {
        headers: {
          Authorisation: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjhmOGI3Y2E0LTE3OWEtNGNlMS04OTg0LWM0OTNiZWNlZTVjNyIsIm5iZiI6MTU4MTk5ODYzOCwiZXhwIjoxNTgyMDg1MDM4LCJpYXQiOjE1ODE5OTg2MzgsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.NPzsD41a6JZzywL7rCkgyqkBNWnxx5echV5a7MFGK7M',
        },
      });
      setLikes(response.data.data.count);
    };
    getLikes();
  }, []);
  const likesClick = (like) => {
    const patchLikes = async () => {
      axios({
        method: 'PATCH',
        url: `http://ec2-13-232-225-51.ap-south-1.compute.amazonaws.com/api/records/${id}/love`,
        data: {
          count: like + 1,
        },
        config: {
          headers: {
            Authorisation: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjhmOGI3Y2E0LTE3OWEtNGNlMS04OTg0LWM0OTNiZWNlZTVjNyIsIm5iZiI6MTU4MTk5ODYzOCwiZXhwIjoxNTgyMDg1MDM4LCJpYXQiOjE1ODE5OTg2MzgsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.NPzsD41a6JZzywL7rCkgyqkBNWnxx5echV5a7MFGK7M',
          },
        },
      });
      setLikes(like + 1);
    };
    patchLikes();
  };

  return (
    <div className="SongCard">
      <img src={imageLink} alt="/" />
      {/* <Link to="/songs?genre=:name"> */}
      <p>
        {title}
      </p>
      <b>
        {artistStr}
      </b>
      <Button text={likes} click={likesClick} />
      {/* </Link> */}
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
