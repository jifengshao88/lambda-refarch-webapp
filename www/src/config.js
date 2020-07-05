// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_NgjJXSMbN",                           // CognitoID
  "aws_user_pools_web_client_id": "5i057dvtlegpr9cdfu3lhmum1q",     // CognitoClientID
  "api_base_url": "https://7zfczic967.execute-api.us-east-2.amazonaws.com/prod",              // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-pt-admin-sam.auth.us-east-2.amazoncognito.com",    // CognitoDomainName
  "redirect_url": "https://master.d1122pb0dtr9yw.amplifyapp.com"                    // AmplifyURL
};

export default config;
