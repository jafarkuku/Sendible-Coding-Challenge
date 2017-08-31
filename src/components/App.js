import React, {Component} from 'react';
import {render} from 'react-dom';

//Components
import Form from '../containers/Form'
import ItemList from '../containers/ItemList'
import Result from '../containers/result'

/**
 * <App /> component.
 */
class App extends Component {
  constructor(props){
    super(props)
      this.state = {}
  }

  /**
   * Renders the App component.
   *
   */
  render(){
    return (
      <div>
        <Form />
        <ItemList />
        <Result />
      </div>
    )
  }
}

export default App;
