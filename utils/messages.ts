import { application } from './config'

export const logging = {
  initialised: (level: string) => `Logging initialized at ${level} level`,
}

export const consortium = {
  initialised: (port: string | number) => `${application.name} API server listening on port => ${port}`,
  welcome: `${application.name} Mainframe API`,
}

export const environment = {
  variablesMissing: `${application.name} has missing environment variables`,
  success: 'All variables have been successfully initialized',
}
