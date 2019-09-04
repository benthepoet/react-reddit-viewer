import React from 'react';

import Error from './Error';
import Nav from './Nav';
import PostList from './PostList';

const App = ({ fetchPosts, error, posts, subreddit }) => (
    <div>
        <Nav onInput={fetchPosts} subreddit={subreddit} />
        <div className="flex pt-8">
            <div></div>
            <div>
                {error && 
                    <Error subreddit={subreddit} />
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