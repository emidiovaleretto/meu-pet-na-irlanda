import React from 'react'

const Input = ({ label, type, name }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} className='' type={type} />
        </div>
    )
}

export default Input