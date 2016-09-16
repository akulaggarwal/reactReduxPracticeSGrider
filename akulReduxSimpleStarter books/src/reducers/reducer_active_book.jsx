//Argument state != app-state, its equal to only state this reducer is resp. for
export default function(state = null, action) {
  console.log('action', action);
  switch(action.type) {
    case 'BOOK_SELECTED':
      console.log('payload', action.payload);
      return action.payload;
  }
  console.log('not case', state);
  return state
}
