const config = {
    development: {
      apiUrl: 'http://localhost:1337',
    },
    production: {
      apiUrl: 'https://strapi-rb1q.onrender.com',
    },
  };
  
  const environment = process.env.NODE_ENV || 'development';
  export default config[environment];