import axios from 'axios'

export const setUser = (input) => async (dispatch) => {
  console.log(input);
  try {
    const user = await axios.post(`${process.env.REACT_APP_API_URL}registration`, input )
    console.log('user', user.data);
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
    await axios.get(`${process.env.REACT_APP_API_URL}logout` )
  } catch (error) {
    console.log(error)
  }
}
