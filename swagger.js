const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Esthers API',
    description: 'Contacts API'
  },
  host: 'cse341-node-se7c.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });