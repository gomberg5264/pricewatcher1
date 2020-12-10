const initialState = {
  userName:'',
  password:''
}

const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SETUSERNAME': return {...state, userName:action.userName}
    case 'SETPASSWORD': return {...state, password:action.password}
    default : return state
  }
}

export const setUserName = (userName) => {
  return {
    type: 'SETUSERNAME',
    userName
  }
}

export const setPassword = (password) => {
  return {
    type: 'SETPASSWORD',
    password
  }
}

export default loginReducer
