import React from 'react';
import he from 'he';

export default ({ name, title }) => (
    <tr key={name}>
        <td>{he.decode(title)}</td>
    </tr>
);