exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  return {
    statusCode: 404,
    body: JSON.stringify({
      "event": event,
      "context": context
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
