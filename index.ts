import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import logger from './utils/logger'
import * as swaggerSpecs from './utils/swagger'
import categoriesRoute from './routes/categories'
import { consortium, environment } from './utils/messages'
import { checkAllEnvVariables } from './utils/helper'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsConfig = {
  origin: true,
  credentials: true
}

app.use(cors(corsConfig))
app.options('*', cors(corsConfig))

app.get('/', (req, res) => res.send('PONG'))

app.use('/category', categoriesRoute)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs.default))

if (checkAllEnvVariables()) {
  logger.info(environment.success)
  app.listen(port, () => logger.info(consortium.initialised(port)))
} else logger.error(environment.variablesMissing)
