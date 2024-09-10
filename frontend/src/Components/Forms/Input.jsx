import React from 'react'

const Input = ({ label, type, name }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={name} className='label'>{label}</label>
            <input id={name} className='input' type={type} />
            <p className='error'>Error</p>
        </div>
    )
}

export default Input