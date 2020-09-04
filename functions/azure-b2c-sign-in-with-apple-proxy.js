exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  return {
    statusCode: 200,
    body: JSON.stringify({
      "key": "value2"
    })
  };
  // const response = {
  //   statusCode: 301,
  //   headers: {
  //     Location: 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp',
  //   }
  // };

  // return callback(null, response);
};
