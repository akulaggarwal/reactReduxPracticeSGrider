export default function(state = null, action) {
  console.log('Action received', action);
  // if (!state) {
  //   return [<div>Place Holder Text</div>]
  // }
  if(action.type === 'FETCH_WEATHER') {
    console.log('city entered');
    return action.payload.data;
  }
  return state;
}
