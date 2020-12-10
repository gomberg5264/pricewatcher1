const initialState = {
  isloading: true,
  url:'',
  price: '',
  items: []
}

const watcherReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SETISLOADING' : return {...state,isloading:true}
    case 'REMOVEISLOADING': return {...state, isloading:false}
    case 'SETITEMS': return {...state,items:action.items}
    case 'SETURL': return {...state, url:action.url}
    case 'SETPRICE': return {...state, price: action.price}
    default: return state
  }
}

export const setIsLoading = () => {
  return {
    type: 'SETISLOADING'
  }
}

export const removeIsLoading = () => {
  return {
    type: 'REMOVEISLOADING'
  }
}


export const setItems = (items) => {
  return {
    type: 'SETITEMS',
    items
  }
}

export const setUrl = (url) => {
  return {
    type: 'SETURL',
    url
  }
}

export const setPrice = (price) => {
  return {
    type: 'SETPRICE',
    price
  }
}

export default watcherReducer