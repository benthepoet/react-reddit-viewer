import React from 'react';

import PostList from '../components/PostList';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.subreddit);
    }

    render() {
        const { posts, subreddit, changeSubreddit, handleSubmit } = this.props;
        return <div className="container p-1 shadow-light bg-white">
            <PostList posts={posts} subreddit={subreddit} onSubmit={handleSubmit} onChangeSubreddit={changeSubreddit} />
        </div>
    }
}

export default App;