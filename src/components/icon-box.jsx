import React from 'react'

function IconBox({ link, image, alt }) {
    return (
        <a href={link ? link : '#'} target="_blank" className="icon-box">
            <img src={image ? image : ''} alt={alt ? alt : ''} />
        </a>
    )
}

export default IconBox
