exports.handler = async (event, context, callback) => {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     "key": "value"
  //   })
  // };
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp',
    }
  };

  return callback(null, response);
};
