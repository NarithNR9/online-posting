import { IApiOption } from '~~/types/api'
import axios from 'axios'
const baseUrl = 'https://learning.tech-cambodia.com/cms'

export const getApi = async (endpoint: string, options: IApiOption) => {
  const response = await $fetch(baseUrl + endpoint, options)
  return response
}

export const postImg = async (endpoint: string, options: IApiOption) => {
  const response = await axios(baseUrl + endpoint, options)
  return response.data
}

export const postApi = async (endpoint: string, options: IApiOption) => {
  const response = await $fetch(baseUrl + endpoint, options)
  return response
}

export const deletePost = async (endpoint: string, options: IApiOption) => {
  await $fetch(baseUrl + endpoint, options)
} 
