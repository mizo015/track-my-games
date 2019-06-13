# Track-My-Games (in Progress)
Mobile app to track games you play in leagues, pick ups,..etc. 

## Note:
This is a for fun app that I am building to explore mobile tech space espcially React Native. So the code is not production ready. If you are reading these lines, please don't copy paste :) 

TODOS:
- add archetecture diagram
- add testing lambda
- Clean up lambda articfact

# Development
 - Chekout repo
 - `npm i` to install dependancies
 - `dynamodb install` install dynamodb locally
 - `serverless offline start` to start a server running lamdas, and dynamodb

# Deployment

Serverless will deploy defined resources in `serverless.yml` file to aws using command `serverless deploy`. Serverless credentials must be configured ahead of time. Use following docs to set them up https://serverless.com/framework/docs/providers/aws/guide/credentials/
