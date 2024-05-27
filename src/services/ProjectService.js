import $store from '@/store/index.js'
import BaseService from './BaseService'

export default {
  getProjects() {
    return BaseService.authApiClient
      .get('/projects')
      .then((res) => {
        if (res.status === 200) {
          $store.commit('getProjects', res.data)
        }
      })
      .catch((error) => {
        if (error) {
          return Promise.reject(error)
        }
      })
  },
  createProject(title, description) {
    BaseService.authApiClient
      .post('/project/create', {
        title,
        description,
      })
      .then((res) => {
        if (res) {
          $store.commit('addProject', res.data)
        }
      })
      .catch((error) => {
        if (error) {
          return Promise.reject(error)
        }
      })
  },
  removeProject(id) {
    BaseService.authApiClient
      .post(`/project/remove`, {
        projectId: id,
      })
      .then((res) => {
        if (res) {
          $store.commit('removeProject', id)
        }
      })
      .catch((error) => {
        if (error) {
          return Promise.reject(error)
        }
      })
  },
}
