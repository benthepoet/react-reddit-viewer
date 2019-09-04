import React from 'react';

const Error = ({ subreddit }) => (
    <div>
        <h2>
            <span className="shadow-light width-full label error">Could not fetch posts for '{subreddit}'</span>
        </h2>
    </div>
);

export default Error;
