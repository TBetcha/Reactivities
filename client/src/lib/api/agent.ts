/** @format */

import axios from 'axios'
import { store } from '../stores/store'
import { toast } from 'react-toastify'
import { router } from '../../app/router/routes'

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

agent.interceptors.request.use((config) => {
  store.uiStore.isBusy()
  return config
})
agent.interceptors.response.use(
  async (response) => {
    await sleep(400)
    store.uiStore.isIdle()
    return response
  },
  async (error) => {
    await sleep(400)
    store.uiStore.isIdle()
    console.log('Axios Error:', error)
    const { status } = error.response
    switch (status) {
      case 400:
        toast.error('bad request')
        break
      case 401:
        toast.error('unauthorized')
        break
      case 404:
        router.navigate('/not-found')
        break
      case 500:
        toast.error('server error')
        break
      default:
        break
    }
    return Promise.reject(error)
  },
)

export default agent
