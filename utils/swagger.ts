import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      description: 'This the the node boilerplate description this could be as long as you want',
      title: 'Node Swagger Boilerplate',
      version: '0.0.1',
      termsOfService: 'http://swagger.io/terms/',
      contact: {
        email: 'apiteam@swagger.io'
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      }
    }
  },
  basePath: '/',
  apis: ['docs/**/*.yaml']
}

export default swaggerJSDoc(options)
