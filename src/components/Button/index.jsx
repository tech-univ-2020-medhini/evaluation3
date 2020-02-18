import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const [count, setCount] = useState(0);
  const { text, click } = props;
  const countHandler = () => {
    click();
    setCount(count + 1);
  };

  return (
    <button data-testid="test-btn" onClick={() => countHandler()} type="button">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,

};

export default Button;
