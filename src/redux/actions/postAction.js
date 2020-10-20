import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS
} from '../constants/postConstant';

export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: FETCH_POSTS_REQUEST });

        const url = "https://js-post-api.herokuapp.com/api/products";
        const response = await fetch(url);
        const responseBody = await response.json();
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            data: responseBody
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POSTS_ERROR,
            message: error
        });
    }
}