
const initState = {
  name: 'ljh',
}

export const login = ( state = initState, action)=>{
  if ( action.type == 'loginSuccess'){
    return state;
  }
}