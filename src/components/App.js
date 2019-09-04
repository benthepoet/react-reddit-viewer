import React from 'react';

import PostList from '../components/PostList';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.subreddit);
    }

    render() {
        const { posts, subreddit, changeSubreddit, handleSubmit } = this.props;
        return <PostList posts={posts} subreddit={subreddit} onSubmit={handleSubmit} onChangeSubreddit={changeSubreddit} />
    }
}

export default App;