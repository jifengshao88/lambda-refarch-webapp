// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_D5MKE76CW",                           // CognitoID
  "aws_user_pools_web_client_id": "1cl9116f38vqtlqpofll7om788",     // CognitoClientID
  "api_base_url": "https://qdplfih4s2.execute-api.us-east-2.amazonaws.com/prod",    // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-pt-admin-sam.auth.us-east-2.amazoncognito.com",  // CognitoDomainName
  "redirect_url": "https://master.d16m7bpnqn7qi1.amplifyapp.com"                    // AmplifyURL
};

export default config;
