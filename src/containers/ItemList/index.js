import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

//components
import Item from '../../components/item'

/**
 * ItemList Component
 */
class ItemList extends Component {

  /**
   * Renders function
   */
  render(){
    const renderList = this.props.items.map((item, i) =>
    !item.exempt  && item.checked  ?
    <Item key= {i}
          quantity = {item.quantity}
          name = {item.name}
          price = {((Math.ceil((0.15 * parseFloat((item.price * item.quantity)))*20)/20) + parseFloat(item.price * item.quantity)).toFixed(2)}
          imported = "imported" />  :
      item.checked ?
      <Item key= {i}
            quantity = {item.quantity}
            name = {item.name}
            price = {((Math.ceil((0.05 * parseFloat((item.price * item.quantity)))*20)/20) + parseFloat(item.price * item.quantity)).toFixed(2)}
            imported = "imported" /> :
      !item.exempt ?
      <Item key= {i}
            quantity = {item.quantity}
            name = {item.name}
            price = {((Math.ceil((0.1 * parseFloat((item.price * item.quantity)))*20)/20) + parseFloat(item.price * item.quantity)).toFixed(2)}
            imported = "" />  :
        <Item key= {i}
            quantity = {item.quantity}
            name = {item.name}
            price = {item.price}
            imported = "" />
    )

    if(this.props.items.length === 0){
      return (
        <div className="item-list">
          <h2>No items entered yet</h2>
        </div>
      )
    }

    return (
      <div className="item-list">
        <h2>Your list of items</h2>
          {renderList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemList)
