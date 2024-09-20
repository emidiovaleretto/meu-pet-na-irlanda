export const API_URL = `${import.meta.env.VITE_API_URL}`

export function LOGIN_POST(body) {
  return {
    url: API_URL + 'login/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function USER_GET(token) {
  return {
    url: API_URL + 'user/',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Token ' + token
      }
    }
  }
}
