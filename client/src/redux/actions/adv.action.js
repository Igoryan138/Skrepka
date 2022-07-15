import axios from 'axios'

export const addAdv = (adv) => async (dispatch) => {
  try {
    console.log(adv);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}add`, {
    method: 'POST',
    body: adv, 
    })
    
    // {headers: { "Content-Type": "multipart/form-data" }})
    
    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: result.data
    // })
  } catch (error) {
    console.log(error);
  }
}

export const selectAdv = (id) => async (dispatch) => {
  try {
    console.log('actionId', id);
    const result = await axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
    console.log(result.data);
  } catch (error) {
    console.log('catch---->', error);
  }
}
