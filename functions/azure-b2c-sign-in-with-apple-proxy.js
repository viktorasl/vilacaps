exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  var body = event['body']
  let parts = body.split('&')
  var id_token = ""
  var state = ""
  for (let part of parts) {
    if (part.startsWith('id_token')) {
      id_token = part.split('=')[1];
    }
    if (part.startsWith('state')) {
      state = part.split('=')[1];
    }
  }
  var ref = event['headers']['referer']
  var nonce = ""
  for (let part of ref) {
    if (part.startsWith('nonce')) {
      nonce = part.split('=')[1];
    }
  }

  loc = 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp?id_token=' + id_token + '&state=' + state + '&nonce=' + nonce
  bd = JSON.stringify({
    location: loc
  });
  console.log(bd);
  // return {
  //   statusCode: 200,
  //   body: bd
  // }
  const response = {
    statusCode: 301,
    headers: {
      Location: loc
    }
  };

  return callback(null, response);
};
