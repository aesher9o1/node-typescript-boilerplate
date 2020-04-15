export const environments = {
  production: 'production',
  qa: 'qa',
  staging: 'staging',
  development: 'dev',
}

export const log = {
  colors: {
    error: 'brightRed',
    warn: 'brightYellow',
    info: 'brightCyan',
    verbose: 'brightWhite',
    debug: 'brightBlue',
    silly: 'brightMagenta',
  },
  filename: 'debug.log',
}

export const application = {
  name: 'Demo Application',
}

export const dummyEnvVariables = {
  PORT: 3000,
  LOG_LEVEL: 'debug',
  NODE_ENV: 'development',
}
