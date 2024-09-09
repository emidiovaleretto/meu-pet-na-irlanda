import React from 'react'
import { Link } from 'react-router-dom'

const SigninForm = () => {
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  function handleSubmit( event ) {
    event.preventDefault;
    
  }

  return (
    <section>
      <h1>Sign in</h1>
      <form action="" onSubmit={ handleSubmit }>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="text" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Sign in</button>
      </form>
      <Link to='/auth/signup'>Sign up</Link>
    </section>
  )
}

export default SigninForm