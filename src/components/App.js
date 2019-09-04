import React from 'react';

import Message from './Message';
import Nav from './Nav';
import PostList from './PostList';

const App = ({ fetchPosts, message, posts, subreddit }) => (
    <div>
        <Nav onInput={fetchPosts} subreddit={subreddit} />
        <div className="flex pt-8">
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

export default App;