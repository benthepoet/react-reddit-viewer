import React from 'react';

import Nav from './Nav';
import PostList from './PostList';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.subreddit);
    }

    render() {
        const { posts, subreddit, changeSubreddit, handleSubmit } = this.props;
        return <div>
            <Nav onInput={changeSubreddit} onSubmit={handleSubmit} subreddit={subreddit} />
            <div className="flex pt-8">
                <div></div>
                <PostList posts={posts} subreddit={subreddit} />
                <div></div>
            </div>
        </div>
    }
}

export default App;