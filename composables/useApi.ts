import { IApiOption } from "~~/types/api"

export const useApi = async (endpoint: string, options: IApiOption) => {
  const baseUrl = 'https://learning.tech-cambodia.com/cms'
  const response = await $fetch(baseUrl + endpoint, options)
  return response
}