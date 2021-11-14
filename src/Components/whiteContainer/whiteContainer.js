import React from 'react';

const WhiteContainer = (props) => {
    return (
        <div className={"bg-white rounded-3 w-100 " + props.style}>
            {props.children}
        </div>
    )
}

export default WhiteContainer;