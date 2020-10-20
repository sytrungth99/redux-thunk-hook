import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
} from '../constants/postConstant';
const initState ={
    request:false,
    success:false,
    message:null,
    data:null,
}
function postReducer(state=initState,payload){
    switch(payload.type){
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                request:true,

            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                request:false,
                success:true,
                data:payload.data,
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                request:false,
                success:false,
                message:payload.message
            };
        default:
            return state;
    }
    
}
export default postReducer;