import { FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS, RESET } from '../actions/types';

const initialState = {
    message: 'Please enter a subreddit to view posts.'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_FAILED:
            return {
                message: action.payload.message
            };

        case FETCH_POSTS_SUCCESS:
            return {
                posts: action.payload.posts,
                subreddit: action.payload.subreddit
            };

        case RESET:
            return {
                ...initialState
            };

        default:
            return state;
    }
};