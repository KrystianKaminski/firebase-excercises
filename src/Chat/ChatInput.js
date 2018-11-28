import React from 'react'




const Input = (props) => (
    <div>
        <input
            value={props.text}
            onChange={props.onChange}
            type="text"
        />
        <button
             onClick={props.onClick}
        >
            Send
        </button>
    </div>
)

export default Input