export function searchReduser(state = [], action) {
  const { type } = action
  switch (type) {
    case 'SET_SEARCH_RESULTS': {
      return action.payload
    }

    default: {
      return state;
    }
  }
}
