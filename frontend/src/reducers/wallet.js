import { ACTION_TYPE_UPDATE_WALLET } from 'config';

const DEFAULT_STATE = {
  isLoading: false,
  contracts: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE_UPDATE_WALLET: {
      return Object.assign({}, state, action.payload);
    }

    default:
      return state;
  }
};
