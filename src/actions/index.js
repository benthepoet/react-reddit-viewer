import { CHANGE_SUBREDDIT, FETCH_POSTS } from './types';

export const changeSubreddit = event => {
    return {
        type: CHANGE_SUBREDDIT,
        payload: {
            subreddit: event.target.value
        }
    };
};

export const fetchPosts = subreddit => {
    return {
        type: FETCH_POSTS,
        payload: {
            subreddit
        }
    }
};

export const handleSubmit = (event, subreddit) => {
    event.preventDefault();
    return fetchPosts(subreddit);
};