import React from 'react'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
    return (
        <div className='mb-4'>
            <label htmlFor={name} className='label'>{label}</label>
            <input 
                id={name}
                name={name}
                className='input'
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className='error'>{error}</p>}
        </div>
    )
}

export default Input