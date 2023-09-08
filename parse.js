


const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const server = new ParseServer({
  databaseURI: 'mongodb://127.0.0.1:27017/tributei', // Connection string for your MongoDB database
  //cloud: './cloud/main.js', // Path to your Cloud Code
 // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
   appId: "ehr",
    masterKey: "JZqWMejDJWOvNd1of0w0G95BznXH03H2f35QhVwC",
});

// Start server
server.start();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', server.app);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});