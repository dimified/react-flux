import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change'; // Has nothing to do with CHANGE action

/**
 * (8) The BaseStore provides us the crucial callback functions for stores.
 * Each component which includes a store must extend from this class in order to emit changes
 * and register the flux updates.
 */
class BaseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default BaseStore;
