import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

class Submit extends Component {
  render(){
    return (
      <Button onclick = {this.props.submit} />
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {submit})(Submit)
