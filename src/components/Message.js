import React from 'react';

export default function Message({ message }) {
    return (
        <div>
            <h3 className="text-center color-light-gray">
                {message}
            </h3>
        </div>
    );
}