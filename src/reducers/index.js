import { CHANGE_SUBREDDIT, FETCH_POSTS } from '../actions/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SUBREDDIT:
            return {
                ...state,
                subreddit: action.subreddit
            };

        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts
            };

        default:
            return state;
    }
};