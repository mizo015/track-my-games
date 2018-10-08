# Track-My-Games
Mobile app to track games you play in leagues, pick ups,..etc. (In Progress)

TODOS:
- add archetecture diagram
- add testing lambda

# Development
 - Chekout repo
 - `npm i` to install dependancies
 - `dynamodb install` install dynamodb locally
 - `serverless offline start` to start a server running lamdas, and dynamodb

# Deployment

Serverless will deploy defined resources in `serverless.yml` file to aws using command `serverless deploy`. Serverless credentials must be configured ahead of time. Use following docs to set them up https://serverless.com/framework/docs/providers/aws/guide/credentials/
