import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

//components
import { addItem } from '../../actions';
import Option from '../../components/options';

/**
 * Form Component
 */
class Form extends Component {
  constructor(props){
    super(props);
      this.state = {
        name:'',
        quantity: '',
        price: '',
        checked: false,
        exempt: false
      }
  }

  handleOnCheckValueChange(e){
    this.setState({
      checked: e.target.checked
    })
  }

  handleOnNameChange(exempt, name){
    this.setState({ name, exempt })
  }

  handleOnQuantityChange(e){
    var ex = /^[0-9]+\.?[0-9]*$/;
    if(ex.test(e.target.value)==false){
      e.target.value = e.target.value.substring(0,e.target.value.length - 1);
     }
    this.setState({
        quantity: e.target.value
    })
  }

  handleOnPriceChange(e){
     var ex = /^[0-9]+\.?[0-9]*$/;
     if(ex.test(e.target.value)==false){
       e.target.value = e.target.value.substring(0,e.target.value.length - 1);
      }
      this.setState({
          price: e.target.value
      })
  }

  onFormSubmit(e){
    e.preventDefault()
  }

  handleSubmit(){
    if(this.state.name === ""){
      alert("Please select a name")
    } else if(this.state.quantity === ""){
      alert("Please enter a quantity")
    }else if(this.state.price === ""){
      alert("Please enter a price")
    }else{
      this.props.addItem(this.state)
    }
  }

  /**
   * Renders Component
   */
  render(){
    return (
      <form onSubmit= {this.onFormSubmit.bind(this)} className="input-group">
          <label className="form-control-label" htmlFor="inputSuccess1">Select Product name</label>
          <div>
            <ButtonToolbar >
              <DropdownButton bsSize="small" title="" id="dropdown-size-large">
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={true} label="Book" />
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={false} label="Music CD" />
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={true} label="Chocolate Bar" />
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={true} label="Box of Chocolates" />
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={false} label="Bottle of Perfume" />
                <Option onClick={this.handleOnNameChange.bind(this)} exempt={true} label="Packet of headache pills" />
              </DropdownButton>
            </ButtonToolbar>
            <input  className="product-input name inline"
                    type="text"
                    placeholder="Click on the arrow to select name "
                    value={this.state.name}
                  />
           </div>
          <div className="form-group">
            <label className="form-control-label">Enter Quantity here</label>
            <input  className="form-control product-input"
                    type ="text"
                    placeholder="Enter quantity here"
                    value={this.state.quantity}
                    onChange={this.handleOnQuantityChange.bind(this)}
                  />
          </div>

          <div className="form-group">
            <label className="form-control-label" htmlFor="inputSuccess1">Enter Price here</label>
            <input  className="form-control product-input number-only"
                    type="text"
                    placeholder="Enter price here"
                    value={this.state.price}
                    onChange={this.handleOnPriceChange.bind(this)}
                  />
          </div>

          <div className="form-group">
            <label className="form-control-label" htmlFor="inputSuccess1">Click below if item is Imported </label>
            <input  className="form-control product-input"
                    type ="checkbox"
                    value={this.state.checked}
                    onChange={this.handleOnCheckValueChange.bind(this)}
                  />
          </div>

          <input  className="btn btn-secondary"
                  type ="submit"
                  value="submit"
                  onClick={this.handleSubmit.bind(this)}
                />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {addItem})(Form);
