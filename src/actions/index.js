import { FETCH_POSTS } from './types';

export const fetchPosts = event => {
    return {
        type: FETCH_POSTS,
        payload: {
            subreddit: event.target.value
        }
    }
};