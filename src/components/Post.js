import React from 'react';
import he from 'he';

export default function Post({ name, title }) {
    return (
        <tr key={name}>
            <td>{he.decode(title)}</td>
        </tr>
    );
}