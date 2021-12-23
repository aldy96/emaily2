import { FETCH_USER  } from "../actions/types";


// export default function (state = {}, action) { 
//     switch(action.type){
//         default:
//             return state;
//     }
//  }

 //for resolve warning

 //ada 3 kondisi untuk melihat apakah sudah login atau belum, maka menggunakan null sebagai default(kondisi tidak tau login atau belum)
 const authReducer = (state = null, action) =>{
    //  console.log(action)
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;

        default:
            return state;
    
    }
 }

 export default authReducer;