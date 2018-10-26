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
    if (result && result.Item) {
      res.json(result.Item);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

// Get Users by email endpoint
app.get('/usersByEmail/:email', (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    FilterExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': req.params.email,
    },
    ProjectionExpression: 'userId',
  };

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      res.status(400).json({ error: `Could not get user by email = ${req.params.email}` });
    }
    if (result && result.Items) {
      res.json(result.Items);
    } else {
      res.status(404).json({ error: `User not found by email - ${req.params.email}` });
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

// Add games
app.post('/addGames', (req, res) => {
  const { userId, games } = req.body;

  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId,
    },
    UpdateExpression: 'SET games = list_append(games, :games)',
    ExpressionAttributeValues: {
      ':games': games,
    },
    ReturnValues: 'UPDATED_NEW', // optional (NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW)
    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
    ReturnItemCollectionMetrics: 'NONE', // optional (NONE | SIZE)
  };

  dynamoDb.update(params, (error, data) => {
    if (error) {
      res.status(400).json({ error: 'Could not add games' });
    }

    res.json(data);
  });
});

module.exports.handler = serverless(app);
