import React from 'react';

import Post from './Post';

const PostList = ({ posts, subreddit, onChangeSubreddit, onSubmit }) => (
    <div>
        <div className="columns">
            <div className="column">
                <h2 className="is-size-3">Reddit Viewer</h2>
            </div>
            <div className="column">
                <form className="form is-pulled-right" onSubmit={event => onSubmit(event, subreddit)}>
                    <div className="field has-addons">
                        <div className="control">
                            <button className="button is-static">/r/</button>
                        </div>
                        <div className="control">
                            <input type="text" className="input" placeholder="subreddit" defaultValue={subreddit} onInput={onChangeSubreddit} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <table className="table mt-1 is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Hot posts</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(Post)}
            </tbody>
        </table>
    </div>
);

export default PostList