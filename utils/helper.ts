import { dummyEnvVariables } from './config'

export const checkAllEnvVariables = (): boolean => {
  let result = true
  Object.keys(dummyEnvVariables).forEach(key => {
    if (!process.env[key]) result = false
  })

  return result
}
