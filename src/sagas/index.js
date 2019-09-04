import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_POSTS, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS } from '../actions/types';
import Api from '../services/Api';

const fetchPostsAsync = function* (action) {
    try {
        const posts = yield call(Api.fetchPosts, action.payload.subreddit);
        yield put({ type: FETCH_POSTS_SUCCESS, payload: { posts } });
    } catch (error) {
        yield put({ type: FETCH_POSTS_FAILED, error });
    }
}

export const rootSaga = function* () {
    yield takeLatest(FETCH_POSTS, fetchPostsAsync);
}