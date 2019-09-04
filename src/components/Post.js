import React from 'react';
import he from 'he';

const Post = ({ name, title }) => (
    <tr key={name}>
        <td>{he.decode(title)}</td>
    </tr>
);

export default Post;