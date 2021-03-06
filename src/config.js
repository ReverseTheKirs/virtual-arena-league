export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "virtual-arena-league-uploads"
    },
    apiGateway: {
      //   Chapter "Deploy the APIs": https://serverless-stack.com/chapters/deploy-the-apis.html
      //   Example URL: https://ly55wbovq4.execute-api.us-east-
      //   EXAMPLE_API_GATEWAY_REGION = us-east-1
      REGION: "us-east-1",
      //   EXAMPLE_API_GATEWAY_URL = 1.amazonaws.com/prod
      URL: "https://9tbk8etr81.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      // EXAMPLE_COGNITO_REGION = Chapter "Create a Cognito identity pool": Create a Cognito identity pool
      REGION: "us-east-1",
      // EXAMPLE_COGNITO_USER_POOL_ID = "Pool Id"
      USER_POOL_ID: "us-east-1_r6V6fOKb4",
      // EXAMPLE_COGNITO_APP_CLIENT_ID = "App Client id"
      APP_CLIENT_ID: "4r8fl84hndtifvfaiif3lo1j92",
      // EXAMPLE_IDENTITY_POOL_ID = Chapter "Create a Cognito identity pool": https://serverless-stack.com/chapters/create-a-cognito-identity-pool.html
      IDENTITY_POOL_ID: "us-east-1:a5259ea4-81a6-4dc4-9a97-add93d2f07b0"
    }
  };

