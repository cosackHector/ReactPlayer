const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';


// Начальное состояние
const initialState = {
  isAuthenticated: false,
  message: ''
};

// Редюсер
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        message: 'Успешный вход',
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        message: 'Неверное имя пользователя или пароль',
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
};



export const loginSuccessAC = () => ({type: LOGIN_SUCCESS});
export const loginFailureAC = () => ({type: LOGIN_FAILURE});
export const clearMessageAC = () => ({type: CLEAR_MESSAGE});