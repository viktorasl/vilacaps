exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event));
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     "key": "value2"
    //   })
    // };
    // const response = {
    //   statusCode: 301,
    //   headers: {
    //     Location: 'https://appleid.apple.com/auth/authorize?client_id=com.fitpassu.fitpassu.beta.azureb2c&redirect_uri=https://vilacaps.com/.netlify/functions/azure-b2c-sign-in-with-apple-proxy&response_type=code&scope=email&response_mode=form_post&ui_locales=en',
    //   }
    // };
    let response
    try {
      response = await fetch('https://appleid.apple.com/auth/authorize?client_id=com.fitpassu.fitpassu.beta.azureb2c&redirect_uri=https://vilacaps.com/.netlify/functions/azure-b2c-sign-in-with-apple-proxy&response_type=code&scope=email&response_mode=form_post&ui_locales=en')
      // handle response
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          error: err.message
        })
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response
      })
    }
    // return callback(null, response);
};
