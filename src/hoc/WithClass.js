import React from 'react';

const WithClass = (props) => (
<div className = {props.classesCss}>
    {props.children}
</div>
)

export default WithClass;