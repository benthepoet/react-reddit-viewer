import { call, debounce, put } from 'redux-saga/effects';

import { FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS } from '../actions/types';
import Api from '../services/Api';

const fetchPostsAsync = function* (action) {
    try {
        const posts = yield call(Api.fetchPosts, action.payload.subreddit);
        yield put({ type: FETCH_POSTS_SUCCESS, payload: { posts, subreddit: action.payload.subreddit } });
    } catch (error) {
        yield put({ type: FETCH_POSTS_FAILED, error, payload: { subreddit: action.payload.subreddit } });
    }
}

export const rootSaga = function* () {
    yield debounce(500, FETCH_POSTS, fetchPostsAsync);
}