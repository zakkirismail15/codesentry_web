import axios from 'axios'

function getBearerToken() {
  const cookieValue = document.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith('access_token='))
  return cookieValue ? cookieValue.split('=')[1] : null
}

export default {
  apiClient: axios.create({
    baseURL: `http://localhost:8080/api`,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }),
  authApiClient: axios.create({
    baseURL: `http://localhost:8080/api`,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getBearerToken()}`,
    },
  }),
}
