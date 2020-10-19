export const initialState = {
    takenTimes: [{
        time: '',
        roomName : ''
    }],
    usersTimes : [{
        time: '',
        roomName : ''
    }],
    user : '',
    bookings: [],
    error: null
  };
  
  export const UPDATE_ALL_TAKEN_TIMES = 'UPDATE_ALL_TAKEN_TIMES';
//   export const RETRIEVE_ALL_TAKEN_TIMES = 'RETRIEVE_ALL_TAKEN_TIMES';
  
  export default function reducer(state, action) {
    switch(action.type){
      case 'UPDATE_ALL_TAKEN_TIMES':
        return { ...state, takenTimes : action.payload};
      case 'UPDATE_USER_TAKEN_TIMES':
        return { ...state, usersTimes : action.payload};
      case 'LOGGED_IN_USER':
          return { ...state, user: action.payload};
      case 'UPDATE_TODAY_USERTIMES_ADMIN':
          return {...state, bookings: action.payload}
      case 'ERROR':
          return {...state, error: action.payload}
          //yet to be implemented
      default:
        return state;
    }
    
  }