const BACK = 'Navigation/BACK';
const INIT = 'Navigation/INIT';
const NAVIGATE = 'Navigation/NAVIGATE';
const SET_PARAMS = 'Navigation/SET_PARAMS';

const back = (payload = {}) => ({
  type: BACK,
  key: payload.key,
  immediate: payload.immediate,
});

back.toString = () => BACK;

const init = (payload = {}) => {
  const action = {
    type: INIT,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  return action;
};

init.toString = () => INIT;

const navigate = payload => {
  const action = {
    type: NAVIGATE,
    routeName: payload.routeName,
  };
  if (payload.params) {
    action.params = payload.params;
  }
  if (payload.action) {
    action.action = payload.action;
  }
  if (payload.key) {
    action.key = payload.key;
  }
  return action;
};

navigate.toString = () => NAVIGATE;

const setParams = payload => ({
  type: SET_PARAMS,
  key: payload.key,
  params: payload.params,
});

setParams.toString = () => SET_PARAMS;

export default {
  // Action constants
  BACK,
  INIT,
  NAVIGATE,
  SET_PARAMS,

  // Action creators
  back,
  init,
  navigate,
  setParams,
};
