import React from 'react';

import Post from './Post';

const PostList = ({ posts, subreddit }) => (
    <div>
        <table className="width-full bg-white shadow-light">
            <thead>
                <tr>
                    <th>/r/{subreddit}</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(Post)}
            </tbody>
        </table>
    </div>
);

export default PostList