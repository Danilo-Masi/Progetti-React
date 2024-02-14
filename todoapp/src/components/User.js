import React from 'react';
import PropTypes from 'prop-types';

const defaultImage = "https://placeholder.com/32x32.png";

function getImageOrDefaultURL(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl;
    } catch {
        return defaultImage;
    }
}

function User({ name, image, children }) {
    return (
        <div className='d-flex align-items-center text-black text-decoration-none py-1'>
            <img
                src={getImageOrDefaultURL(image)}
                width="32"
                height="32"
                className='rounded-circle me-2'
                alt='User profile'
            />
            <strong>
                {name}
            </strong>
            {children}
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    children: PropTypes.node,
};

export default User;
