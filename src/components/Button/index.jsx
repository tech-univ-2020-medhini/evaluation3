import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = (props) => {
  const { text, click } = props;

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
