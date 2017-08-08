import React, { Component } from 'react';
import AppActionCreator from './actions/AppActionCreator';
import AppStore from './stores/AppStore';

/**
 * (6) AppStore provides the public interface to get the needed properties for our components.
 */
function state() {
  return {
    isLoggedIn: AppStore.getState().isLoggedIn
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      isLoggedIn: false
    };
  }

  /**
   * (4) In order that changes take effect we are using the EventEmitter
   * functions from 'events'. These callbacks are registered on the life cycle
   * methods of the component.
   */
  componentDidMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  /**
   * (5) The onChange callback is the glue between the action and the state.
   * After emitting changes in the store we need to provide the updated state to the component.
   * Updating the state handles rendering of our application.
   */
  onChange = () => {
    this.setState(state());
  };

  render() {
    /**
     * (1) The action is directly called by importing the proper ActionCreator (additional!)
     * (2) The ActionCreator could include additional logic (but mostly the same)
     */
    return (
      <div className="App">
        <button onClick={ AppActionCreator.loginLogout }>{ this.state.isLoggedIn ? 'Logout' : 'Login' }</button>
        <div>{ JSON.stringify(this.state) }</div>
      </div>
    );
  }
}

export default App;
