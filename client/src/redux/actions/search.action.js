export const setSearchResult = (adverts) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_SEARCH_RESULTS',
      payload: adverts
    })
  } catch (error) {
    console.log(error);
  }
}
