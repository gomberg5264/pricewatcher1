const initialState = {
  message: '',
  color: 'green',
  timeoutId: '',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDNOTIFICATION': {
      return { ...state, message: action.message };
    }
    case 'REMOVENOTIFICATION':
      return { ...state, message: '' };
    case 'SETCOLOR':
      return { ...state, color: action.color };
    case 'SETTIMEOUTID':
      return { ...state, timeoutId: action.id };
    default:
      return state;
  }
};

export const addNotification = (message) => {
  return {
    type: 'ADDNOTIFICATION',
    message,
  };
};

export const RemoveNotification = () => {
  return {
    type: 'REMOVENOTIFICATION',
  };
};

export const setColor = (color) => {
  return {
    type: 'SETCOLOR',
    color,
  };
};

export const setTimeoutId = (id) => {
  return {
    type: 'SETTIMEOUTID',
    id,
  };
};

export default notificationReducer;
