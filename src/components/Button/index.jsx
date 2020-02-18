import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = (props) => {
  const [count, setCount] = useState(0);
  const { text, click } = props;
  //   const countHandler = () => {
  //     click();
  //     setCount(count + 1);
  //   };

  return (
    <div className="Button">
      <button data-testid="test-btn" onClick={click} type="button">
        {text}
      </button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,

};

export default Button;
