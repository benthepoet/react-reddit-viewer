import { CHANGE_SUBREDDIT, FETCH_POSTS_SUCCESS } from '../actions/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SUBREDDIT:
            return {
                ...state,
                subreddit: action.payload.subreddit
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts
            };

        default:
            return state;
    }
};