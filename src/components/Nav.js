import React from 'react';

const Nav = ({ onInput, subreddit }) => (
    <nav>
        <span className="brand">Reddit Viewer</span>
        <div className="menu">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="subreddit" defaultValue={subreddit} onInput={onInput} />
            </form>
        </div>
    </nav>
);

export default Nav;