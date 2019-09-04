import { FETCH_POSTS } from './types';

export const fetchPosts = event => (
    {
        type: FETCH_POSTS,
        payload: {
            subreddit: event.target.value
        }
    }
);