import { call, debounce, put } from 'redux-saga/effects';

import { FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS, RESET } from '../actions/types';
import Api from '../services/Api';

const fetchPostsAsync = function* (action) {
    const { subreddit } = action.payload;

    if (!subreddit) {
        return yield put({ type: RESET });
    }

    try {
        const posts = yield call(Api.fetchPosts, subreddit);
        yield put({ type: FETCH_POSTS_SUCCESS, payload: { posts, subreddit } });
    } catch (error) {
        const message = `The subreddit '${subreddit}' is not valid.`;
        yield put({ type: FETCH_POSTS_FAILED, payload: { message } });
    }
}

export const rootSaga = function* () {
    yield debounce(500, FETCH_POSTS, fetchPostsAsync);
}