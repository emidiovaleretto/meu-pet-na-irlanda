import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST } from '../../api';

const SigninForm = () => {
  const username = useForm()
  const password = useForm()

  async function handleSubmit(event) {
    event.preventDefault;

    if (username.validate() && password.validate()) {
      const [url, options] = TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
    }
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