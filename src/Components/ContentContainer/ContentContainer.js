import React from 'react';
import './ContentContainer.css';

const ContentContainer = (props) => {
    return (
        <div className="w-85 bg-lowBrown h-100 min-vh-100 contentPadding position-relative">
            { props.children }
        </div>
    )
}

export default ContentContainer;