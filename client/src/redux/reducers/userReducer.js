export function userReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {...action.payload}
    case 'LOGOUT_USER':
      return {}
    case 'CHECK_AUTH':
      return {...state,id:action.payload}
    default:
      return state
  }
}
