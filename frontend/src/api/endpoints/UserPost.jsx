import React from 'react'

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault;

        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }
        })
    }

  return (
    <div className="grid place-content-center h-screen">
        <form onSubmit={handleSubmit()}>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">USER POST</h2>
            <div class="mb-6">
                <label class="block mb-0.5 text-sm font-medium text-gray-900">Username</label>
                <input type="text" className="input-field" value={username} onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div class="mb-6">
                <label class="block mb-0.5 text-sm font-medium text-gray-900">E-mail</label>
                <input type="text" className="input-field" value={email} onChange={({ target }) => setEmail(target.value)} />
            </div>
            <div class="mb-6">
                <label class="block mb-0.5 text-sm font-medium text-gray-900">Password</label>
                <input type="text" className="input-field" value={password} onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type="button" className="btn-primary">Send</button>
        </form>
    </div>
  )
}

export default UserPost