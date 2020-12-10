const initialState = {
  userName:'',
  password:'',
  email:'',
  phone:''
}

const signupReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SETSIGNUPUSERNAME': return {...state, userName: action.userName}
    case 'SETSIGNUPPASSWORD': return {...state, password: action.password}
    case 'SETEMAIL': return {...state, email: action.email}
    case 'SETPHONE': return {...state, phone: action.phone}
    default: return state
  }
}

export const setUserName = (userName) => {
  return {
    type: 'SETSIGNUPUSERNAME',
    userName
  }
}

export const setPhone = (phone) => {
  return {
    type: 'SETPHONE',
    phone
  }
}

export const setEmail = (email) => {
  return {
    type: 'SETEMAIL',
    email
  }
}

export const setPassword = (password) => {
  return {
    type: 'SETSIGNUPPASSWORD',
    password
  }
}


export default signupReducer
