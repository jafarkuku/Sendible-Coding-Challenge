import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

const Button = ({onClick}) => (
  <input type="submit"
         value="Get Receipt"
         onClick={onClick}
  />
)

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
