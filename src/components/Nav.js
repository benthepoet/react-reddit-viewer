import React from 'react';

const Nav = ({ onInput }) => (
    <nav>
        <span className="brand">
            <i className="fab fa-2x fa-reddit"></i> Reddit Viewer
        </span>
        <div className="menu">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="subreddit" onInput={onInput} />
            </form>
        </div>
    </nav>
);

export default Nav;