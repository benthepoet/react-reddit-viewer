import React from 'react';

const Nav = ({ onInput, onSubmit, subreddit }) => (
    <nav>
        <span className="brand">Reddit Viewer</span>
        <div className="menu">
            <form onSubmit={event => onSubmit(event, subreddit)}>
                <input type="text" placeholder="subreddit" defaultValue={subreddit} onInput={onInput} />
            </form>
        </div>
    </nav>
);

export default Nav;