const axios = require('axios');

axios.get('https://api.scratch.mit.edu/users/griffpatch/following/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
