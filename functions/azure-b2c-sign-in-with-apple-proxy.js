exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  // https://vilacaps.com/sign-in-with-apple.html?client_id=com.fitpassu.fitpassu.beta.azureb2c&redirect_uri=https%3a%2f%2ffitpassuprod.b2clogin.com%2ffitpassuprod.onmicrosoft.com%2foauth2%2fauthresp&response_type=id_token&scope=email+name&response_mode=form_post&nonce=lnnpyGfESK%2bJt4BEDNUJLg%3d%3d&ui_locales=en&state=StateProperties%3deyJTSUQiOiJ4LW1zLWNwaW0tcmM6NTc0N2MyMGEtZDQ0Ni00OTY1LWFkMjMtODZiMWNjMTRlNjJlIiwiVElEIjoiYzQ1Y2EyODgtNGVjMi00YjhkLThhZDUtZDIyNDU4MTk4MjEwIiwiVE9JRCI6IjEzYmVjZWRhLTg4ODgtNGI4OS04NzYxLWNiZWQyNGRhMmE4MyJ9

  return {
    statusCode: 200,
    body: JSON.stringify({
      "event": event
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
