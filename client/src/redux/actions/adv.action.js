import axios from 'axios'

export const addAdv = (adv) => async (dispatch) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_URL}add`, {
    method: 'POST',
    body: adv, 
    })
  } catch (error) {
    console.log(error);
  }
}

export const selectAdv = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}add/${id}`)
  } catch (error) {
    console.log(error);
  }
}
