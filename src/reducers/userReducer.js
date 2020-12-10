const initialState = {
  isLoggedIn: false,
  userInfo: {
    userName:'',
    email:'',
    phone:''
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SETISLOGGEDIN' : return {...state,isLoggedIn:true}
    case 'REMOVELOGGEDIN': return {...state, isLoggedIn: false}
    case 'SETUSER': return {...state, userInfo: action.userInfo}
    default: return state
  }
}

export const setLoggedIn = () => {
  return({
    type: 'SETISLOGGEDIN'
  })
}

export const removeLoggedIn = () => {
  return {
    type: 'REMOVELOGGEDIN'
  }
}

export const setUser = (userInfo) => {
  return({
    type: 'SETUSER',
    userInfo
  })
}

export default userReducer