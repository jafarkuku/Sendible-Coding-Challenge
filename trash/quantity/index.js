import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Input from '../input';
import { updateQuantity } from '../../actions';

class Quantity extends Component{
  constructor(props){
    super(props)
    // this.state = {
    //   quantity: ''
    // }
  }

  // handleOnChange = (currentvalue) => {
  //   this.setState({
  //     quantity: currentvalue,
  //   })
  // }

  render(){
    const { quantity } = this.props
    return (
      <Input type = "text" placeholder = "Enter quantity here" value = { quantity } onTextChange = { this.props.updateQuantity } />
    )
  }
}

Quantity.propTypes = {
  quantity: PropTypes.any,
  onChange: PropTypes.func
}

const mapStateToProps = state => {
  return {
    quantity: state.activeitem.quantity
  }
}

export default connect(mapStateToProps, {updateQuantity})(Quantity);
