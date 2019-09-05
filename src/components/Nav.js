import React from 'react';

export default function Nav({ onInput }) {
    return (
        <nav>
            <span className="brand">
                <i className="fab fa-2x fa-reddit"></i> React Reddit Viewer
            </span>
            <div className="menu">
                <form onSubmit={event => event.preventDefault()}>
                    <input type="text" placeholder="subreddit" onInput={onInput} />
                </form>
            </div>
        </nav>
    );
}