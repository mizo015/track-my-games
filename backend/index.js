const AWS = require('aws-sdk');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const { IS_OFFLINE, USERS_TABLE } = process.env;

let dynamoDb;

if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  });
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  res.send('Nothing to see here!');
});

// Get User endpoint
app.get('/users/:userId', (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      res.status(400).json({ error: 'Could not get user' });
    }
    if (result.Item) {
      res.json(result.Item);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

// Create User endpoint
app.post('/users', (req, res) => {
  const { userId, name } = req.body;
  if (typeof userId !== 'string') {
    res.status(400).json({ error: '"userId" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: req.body,
  };

  dynamoDb.put(params, error => {
    if (error) {
      res.status(400).json({ error: 'Could not create user' });
    }
    res.json({ userId, name });
  });
});

module.exports.handler = serverless(app);
