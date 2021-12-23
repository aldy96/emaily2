import axios from 'axios' //axios is AJAX for access server API
import { FETCH_USER } from './types';


// Version 1, we use thunk for access directly to the dispatch function, and making action creator return function not action
// export const fetchUser = () => { //because we only have one expression, we dont need using "return" statement
//     return function(dispatch){ 
//         axios
//         .get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}))

//     }
// }

//refactoring, /because we only have one expression, we dont need using "return" statement
// simpan async di depan function yang mengandung promise, await di depan promise
export const fetchUser = () => async dispatch => { 
            const res = await axios.get('/api/current_user');

            dispatch({type: FETCH_USER, payload: res.data});
        }
    