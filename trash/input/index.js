import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    onTextChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    type: PropTypes.string,
    name: PropTypes.string
  }

  handleOnChange = (e) => {
    this.props.onTextChange(e.target.value)
  }

  render(){
    const {
      placeholder,
      inputClasses,
      value,
      name,
      type
    } = this.props;

    return (
      <input
        placeholder = { placeholder }
        value = { value }
        name = { name }
        onChange = { this.handleOnChange }
        type = { type } />
    )
  }
}

export default Input;
