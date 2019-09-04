import { FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS } from '../actions/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_POSTS_FAILED:
            return {
                ...state,
                error: action.error,
                posts: null,
                subreddit: action.payload.subreddit
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                error: null,
                posts: action.payload.posts,
                subreddit: action.payload.subreddit
            };

        default:
            return state;
    }
};