import Dispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import BaseStore from './BaseStore';

/**
 * (7) This is the private store.
 */
let state = {
  isLoggedIn: false
};

/**
 * Public interface functions
 */
class AppStore extends BaseStore {
  getState() {
    return state;
  }
}

// We need to create an instance in order to work with ES6 extended classes
let instance = new AppStore();

// Provided by flux
/**
 * (9) When certain actions get triggered we define what data will change
 * and save it to the store.
 */
Dispatcher.register(action => {
  switch (action.type) {
    case AppConstants.LOGINLOGOUT:
      state.isLoggedIn = !state.isLoggedIn;
      break;
    default:
      break;
  }

  // Needed to update the store and trigger rendering
  instance.emitChange();
});

export default instance;
