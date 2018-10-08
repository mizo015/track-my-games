const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');

const IS_OFFLINE = process.env.IS_OFFLINE;
const USERS_TABLE = process.env.USERS_TABLE;

let dynamoDb;
if (IS_OFFLINE === 'true') {
    dynamoDb = new AWS
        .DynamoDB
        .DocumentClient({region: 'localhost', endpoint: 'http://localhost:8000'})
    console.log(dynamoDb);
} else {
    dynamoDb = new AWS
        .DynamoDB
        .DocumentClient();
};

app.use(bodyParser.json({strict: false}));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

// Get User endpoint
app.get('/users/:userId', function (req, res) {
    const params = {
        TableName: USERS_TABLE,
        Key: {
            userId: req.params.userId
        }
    }

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.log(error);
            res
                .status(400)
                .json({error: 'Could not get user'});
        }
        if (result.Item) {
            res.json(result.Item);
        } else {
            res
                .status(404)
                .json({error: "User not found"});
        }
    });
})

// Create User endpoint
app.post('/users', function (req, res) {
    const {userId, name} = req.body;
    if (typeof userId !== 'string') {
        res
            .status(400)
            .json({error: '"userId" must be a string'});
    }

    const params = {
        TableName: USERS_TABLE,
        Item: req.body,
    };

    dynamoDb.put(params, (error, putRes) => {
        if (error) {
            console.log(error);
            res
                .status(400)
                .json({error: 'Could not create user'});
        }
        res.json(putRes);
    });
})

module.exports.handler = serverless(app);