import BaseService from './BaseService'

export default {
  login(email, password) {
    return BaseService.apiClient
      .post('/auth/login', {
        email,
        password,
      })
      .then(({ data }) => {
        document.cookie = `access_token=${data.token}; Path=/; SameSite=Lax;`
        localStorage.setItem('role', data.role)
      })
      .catch((error) => {
        if (error) {
          return Promise.reject(error)
        }
      })
  },
  getUserRole() {
    return localStorage.getItem('role')
  },
}
