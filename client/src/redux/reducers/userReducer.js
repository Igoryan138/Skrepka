export function userReducer(state = {
  user: null,
  isLoaded: false
}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {...state,user:action.payload, isLoaded:true}
    case 'LOGOUT_USER':
      return {
        user: null,
        isLoaded:true
      }
    case 'CHECK_AUTH':
      return {...state,user:action.payload, isLoaded: true}
    default:
      return state
  }
}
