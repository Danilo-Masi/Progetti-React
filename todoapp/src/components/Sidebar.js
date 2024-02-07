import React from 'react';
//Components
import User from './User';
import ListNames from './ListNames';
import Col from './Col';

const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0,0,0,0.1)",
}

export default function Sidebar({ user: { name, image } }) {
    return (
        <Col size={3} className="bg-ligth" style={customStyle}>
            <User name={name} image={image} />
            <hr />
            <ListNames />
        </Col>
    )
}
