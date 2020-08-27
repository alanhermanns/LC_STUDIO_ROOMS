// export const initialState = {
//     roomTimes: [],
//     loading: true
//   };
  
//   export const UPDATE_GLOBAL_ROOMTIMES = 'UPDATE_GLOBAL';
//   export const RETRIEVE_GLOBAL_ROOMTIMES = 'RETRIEVE_GLOBAL_ROOMTIMES';
  
//   export default function reducer(state, action) {
//     switch(action.type){
//       case UPDATE_GLOBAL_ROOMTIMES:
//         return { ...state, points: [...state.roomTimes, action.payload] };
//       case RETRIEVE_GLOBAL_ROOMTIMES:
//         return { ...state, points: action.payload, loading: false };
//       default: 
//         return state;
//     }
    
//   }