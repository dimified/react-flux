import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  loginLogout: () => {
    /**
     * (3) The AppDispatcher takes care that actions are only triggered in sequence.
     * This could potentially lead to problems.
     */
    AppDispatcher.dispatch({
      type: AppConstants.LOGINLOGOUT
    });
  }
};

export default AppActions;
