import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

const Imported = ({value, onChange}) => (
  <input type="checkbox"
         checked={value}
         onChange={onChange}
  />
)

Imported.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func
}


export default Imported;
