const config = {
    development: {
      apiUrl: 'http://localhost:1337',
    },
    production: {
      apiUrl: 'https://your-production-api-url.com',
    },
  };
  
  const environment = process.env.NODE_ENV || 'development';
  export default config[environment];