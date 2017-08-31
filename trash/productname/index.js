import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import Input from '../input';
import { updateItem } from '../../actions';

class ProductName extends Component{
  constructor(props){
    super(props)
      this.state={
        name: '',
      }
  }

  handleOnChange(e){
    this.setState({
      name: e.target.value
    })
  }

  render(){
    const { name } = this.props
    return (
      <input type = "text" placeholder = "Enter Product Name" value = { name } onChange = { this.handleOnChange.bind(this) } />
    )
  }
}

ProductName.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
}

const mapStateToProps = state => {
  return {
    name: state.activeitem.name
  }
}

export default ProductName;
