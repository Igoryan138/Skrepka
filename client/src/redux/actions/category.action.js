import axios from 'axios'

export const setCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(process.env.REACT_APP_API_URL)
    dispatch({
      type: 'SET_CATEGORIES',
      payload: categories.data
    })
  } catch (error) {
    console.log(error);
  }
}
