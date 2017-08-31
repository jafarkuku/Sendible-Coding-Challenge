import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//component
import {getItemSelector, totalTaxSelector, totalSelector} from '../../selectors';

class Result extends Component{
  render(){
    return (
      <div className="result">
        <h4>Sales Tax</h4>
        <span>{(totalTaxSelector(this.props.items.items)).toFixed(2)}</span>
        <h4>Total</h4>
        <span>{(totalSelector(this.props.items.items)).toFixed(2)}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getItemSelector(state)
  }
}

export default connect(mapStateToProps)(Result);
