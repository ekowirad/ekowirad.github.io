import React from 'react'

export default function Button({ text, ...props }) {
    return (
        <button className="button" {...props}>
            <div className="text"> {text}</div>
            {
                !props.disabled && <div className="bg"> </div>
            }

        </button>
    )
}