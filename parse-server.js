const express = require('express');
const { ParseServer } = require('parse-server');
const ParseMySQLAdapter = require('parse-server-mysql-adapter');
const FSAdapter = require('parse-server-fs-adapter');

const app = express();

const databaseAdapter = new ParseMySQLAdapter({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'ehr',
  port: 3306,
});

const filesAdapter = new FSAdapter({
  filesSubDirectory: './files',
});

/*
const filesAdapter = new S3Adapter({
  accessKey: 'AKIAVIQR77DZA6X6BBNM',
  secretKey: '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',
  bucket: 'ehr-sinet-app',
  region: 'eu-west-2',
});
*/

const api = new ParseServer({
  databaseAdapter,
  filesAdapter,
  appId: 'ehr-app',
  masterKey: 'JZqWMejDJWOvNd1of0w0G95BznXH03H2f35QhVwC',
  serverURL: 'http://localhost:1337/parse',
  allowClientClassCreation: false,
  allowExpiredAuthDataToken: false,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/parse', api);

const server = app.listen(1337, function () {
  console.log('Parse Server está rodando em http://localhost:1337/parse');
});