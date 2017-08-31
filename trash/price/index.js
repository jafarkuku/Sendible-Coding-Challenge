import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import Input from '../input';

class Price extends Component{
  constructor(props){
    super(props)
    this.state = {
      price: ''
    }
  }

  handleOnChange = (currentvalue) => {
    this.setState({
      price: currentvalue,
    })
  }

  render(){

    const { price } = this.state

    return (
      <Input type = "text" placeholder = "Enter price here" value = { price } onTextChange = { this.handleOnChange } />
    )
  }
}

Price.propTypes = {
  price: PropTypes.number,
  onChange: PropTypes.func
}

export default Price;
