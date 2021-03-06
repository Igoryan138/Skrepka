import axios from 'axios'

export const setUser = (input) => async (dispatch) => {
  try {
    const user = await axios.post(`${process.env.REACT_APP_API_URL}registration`, input , {withCredentials: true})
    dispatch({
      type: 'SET_USER',
      payload: user.data
    })
  } catch (error) {
    console.log(error);
  }
}

export const logOutUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'LOGOUT_USER',
    })
    await axios.get(`${process.env.REACT_APP_API_URL}logout`, {withCredentials:true} )
  } catch (error) {
    console.log(error)
  }
}

export const chekUserAuth = () => async (dispatch) => {
  try {
    const user = await axios.get(`${process.env.REACT_APP_API_URL}auth`, {withCredentials:true})
   
    dispatch({
      type: 'CHECK_AUTH',
      payload: user.data
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'SET_USER',
      payload: null
    })
  }
}

export const authUser = (input) => async (dispatch) => {
  try {
    const user = await axios.post('http://localhost:3100/login', input, {withCredentials:true})
    dispatch({
      type: 'SET_USER',
      payload: user.data
    })
  } catch (error) {
    console.log(error);
  }
}

export const editUser = (params) => async (dispatch) => {
  try {
    const user = await axios.post('http://localhost:3100/profile/edit', params, {withCredentials:true})
    dispatch({
      type: 'SET_USER',
      payload: user.data
    })
    return user.data
  } catch (error) {
    console.log(error);
  }
}
