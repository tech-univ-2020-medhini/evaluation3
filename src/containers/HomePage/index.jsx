import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../components/Button';
import bearerToken from '../../env';

const HomePage = (props) => {
  const { setSongsList, setIsSyncClicked } = props;
  const click = () => {
    const getSongs = async () => {
      const response = await axios.get('/api/records', {
        headers: {
          Authorization: bearerToken,
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
  setIsSyncClicked: PropTypes.func.isRequired,
};
export default HomePage;
