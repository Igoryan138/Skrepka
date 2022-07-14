import axios from 'axios'

export const addAdv = (adv) => async (dispatch) => {
  try {
    console.log(adv);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}add`, adv, {headers: { "Content-Type": "multipart/form-data" }})
    
    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: result.data
    // })
  } catch (error) {
    console.log(error);
  }
}
