exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event));
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     "key": "value2"
    //   })
    // };
    const response = {
      statusCode: 301,
      headers: {
        Location: 'https://appleid.apple.com/auth/authorize?client_id=com.fitpassu.fitpassu.beta.azureb2c&redirect_uri=https://vilacaps.com/.netlify/functions/azure-b2c-sign-in-with-apple-proxy&response_type=code&scope=email&response_mode=form_post&ui_locales=en',
      }
    };
  
    return callback(null, response);
};
