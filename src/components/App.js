import React from 'react';

import Message from './Message';
import Nav from './Nav';
import PostList from './PostList';

export default ({ fetchPosts, message, posts, subreddit }) => (
    <div>
        <Nav onInput={fetchPosts} />
        <div className="flex pt-4">
            <div></div>
            <div>
                {message && 
                    <Message message={message} />
                }
                {posts &&
                    <PostList posts={posts} subreddit={subreddit} />
                }
            </div>
            <div></div>
        </div>
    </div>
);