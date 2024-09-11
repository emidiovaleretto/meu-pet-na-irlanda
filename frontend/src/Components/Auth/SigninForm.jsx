import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const SigninForm = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(event) {
    event.preventDefault;

    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((json) => {
      console.log(json)
    })

  }

  return (
    <section>
      <h1>Sign in</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Sign in</Button>
      </form>
      <Link to='/auth/signup'>Sign up</Link>
    </section>
  )
}

export default SigninForm