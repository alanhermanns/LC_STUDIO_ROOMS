export const initialState = {
    takenTimes: [{
        time: '',
        roomName : ''
    }],
    usersTimes : {
        time: '',
        roomName : ''
    }
  };
  
  export const UPDATE_ALL_TAKEN_TIMES = 'UPDATE_ALL_TAKEN_TIMES';
  export const RETRIEVE_ALL_TAKEN_TIMES = 'RETRIEVE_ALL_TAKEN_TIMES';
  
  export default function reducer(state, action) {
    switch(action.type){
      case 'UPDATE_ALL_TAKEN_TIMES':
        return { ...state, takenTimes : action.payload};
        case 'UPDATE_USER_TAKEN_TIMES':
        return { ...state, usersTimes : action.payload};
    //   case RETRIEVE_ALL_TAKEN_TIMES:
    //     return { ...state, ...action.payload};
      default:
        return state;
    }
    
  }