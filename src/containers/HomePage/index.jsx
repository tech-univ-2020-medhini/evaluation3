import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../components/Button';

const HomePage = (props) => {
  const { setSongsList, setIsSyncClicked } = props;
  const click = () => {
    const getSongs = async () => {
      const response = await axios.get('/api/records', {
        headers: {
          Authorisation: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjhmOGI3Y2E0LTE3OWEtNGNlMS04OTg0LWM0OTNiZWNlZTVjNyIsIm5iZiI6MTU4MTk5ODYzOCwiZXhwIjoxNTgyMDg1MDM4LCJpYXQiOjE1ODE5OTg2MzgsImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.NPzsD41a6JZzywL7rCkgyqkBNWnxx5echV5a7MFGK7M',
        },
      });
      setSongsList(response.data.data);
    };
    getSongs();
    setIsSyncClicked(true);
  };
  return (
    <div className="HomePage">
      <p>
        :((
      </p>
      <p>
        Seems a bit empty in here
      </p>
      <Button text="sync" click={click} />

    </div>
  );
};
HomePage.propTypes = {
  setSongsList: PropTypes.func.isRequired,

};
export default HomePage;
