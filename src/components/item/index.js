import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

/**
 * Item Component
 */
class Item extends Component {

  /**
   * Renders function
   */
  render(){
    const {quantity, name, price, imported} = this.props;
    return (
      <div className="hello">
        {quantity} &nbsp;
        {imported} &nbsp;
        {name} &nbsp;
        £{price} &nbsp;
      </div>
    )
  }
}

/**
  *	Props implementation.
  */
Item.propTypes = {
  name: PropTypes.string,
  imported: PropTypes.string,
  quantity: PropTypes.any,
  price: PropTypes.any,
  onChange: PropTypes.func
}

export default Item;
