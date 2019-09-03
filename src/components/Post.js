import React from 'react';

const Post = ({ name, title }) => (
    <tr key={name}>
        <td>{title}</td>
    </tr>
);

export default Post;