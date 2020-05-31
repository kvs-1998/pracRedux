// for fetching and creating posts 
// 2 actions in this project
 
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    // posts 
    items: [],
    // single post added
    item: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}