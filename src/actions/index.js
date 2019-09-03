import { CHANGE_SUBREDDIT, FETCH_POSTS } from './types';

export const changeSubreddit = event => {
    return {
        type: CHANGE_SUBREDDIT,
        subreddit: event.target.value
    };
};

export const fetchPosts = () => {
    return (dispatch, getState) => {
        const { subreddit } = getState();

        fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => json.data.children.map(x => x.data))
            .then(posts => dispatch({ type: FETCH_POSTS, posts }));
    };
};

export const handleSubmit = event => {
    event.preventDefault();
    return fetchPosts();
};