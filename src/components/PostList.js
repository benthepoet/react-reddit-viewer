import React from 'react';

import Post from './Post';

const PostList = ({ posts, subreddit, onChangeSubreddit, onSubmit }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Subreddit" defaultValue={subreddit} onInput={onChangeSubreddit} />
            <button type="submit">Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(Post)}
            </tbody>
        </table>
    </div>
);

export default PostList