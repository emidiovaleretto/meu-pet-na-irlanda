import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className='btn-primary'>{children}</button>
    )
}

export default Button