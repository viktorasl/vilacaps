exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event));
    // const redirect_uri = event["queryStringParameters"]["redirect_uri"]
    // const state = event["queryStringParameters"]["state"]
    // const code = "AQDZRaj8eVLGJwULb7vyXPCLk8CBThisIsCode"
    // const loc = redirect_uri + "?" + "code=" + code + "&state=" + state
    // console.log(loc);
    // const response = {
    //     statusCode: 301,
    //     headers: {
    //       Location: loc
    //     }
    // };
    // return callback(null, response);
}
