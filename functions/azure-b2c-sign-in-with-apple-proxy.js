exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  // https://vilacaps.com/sign-in-with-apple.html?client_id=com.fitpassu.fitpassu.beta.azureb2c&redirect_uri=https%3a%2f%2ffitpassuprod.b2clogin.com%2ffitpassuprod.onmicrosoft.com%2foauth2%2fauthresp&response_type=id_token&scope=email+name&response_mode=form_post&nonce=lnnpyGfESK%2bJt4BEDNUJLg%3d%3d&ui_locales=en&state=StateProperties%3deyJTSUQiOiJ4LW1zLWNwaW0tcmM6NTc0N2MyMGEtZDQ0Ni00OTY1LWFkMjMtODZiMWNjMTRlNjJlIiwiVElEIjoiYzQ1Y2EyODgtNGVjMi00YjhkLThhZDUtZDIyNDU4MTk4MjEwIiwiVE9JRCI6IjEzYmVjZWRhLTg4ODgtNGI4OS04NzYxLWNiZWQyNGRhMmE4MyJ9

  // state=abct2&code=cef0bae11a7ef4a409bbbbf0de7803c10.0.nrstt.UllGfVUGv3Cn9azB1Np1nA&id_token=eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMudGVzdDIiLCJleHAiOjE1OTkzMDgwMDgsImlhdCI6MTU5OTIyMTYwOCwic3ViIjoiMDAxMjMzLmIzY2NkOTI3YTY0NTRlMDM5ZjQzZWQzMDcyMzY3NzA2LjA4NDYiLCJjX2hhc2giOiIwS256ZElrZlUzWlY0SEdhUmJKdjVnIiwiYXV0aF90aW1lIjoxNTk5MjIxNjA4LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.RuAiESqluAuVNm9wjQM3G4Y39MUh1N_4VdUUufVZgWs2ALh-KpZniVExI0kduUBZ0lPIzp_H4xjA3z5BeOrYe-I-QvRedNB-zT84GkkB9O-PE3NprTq1M_2OTGGyOWWDnlIE28fT4y_5Igp2LkMz2TF72f1BRKVaYsllusglHhgKt0Hh8NkDndNVlAHGVT8x01rtt2bWl593hyTb8ghefrsae_JHngffvHMfJbbkpvTZ2hvUNSx3QpJCFwPC0a7Naspq1elX3rctm_1DlyL7M85X07yi44wg1z6zGklDAY5g-Avza93Hza0Y5fZawESK-E3m4SNRu7BBq0y8_L818w&user=%7B%22name%22%3A%7B%22firstName%22%3A%22Viktoras%22%2C%22lastName%22%3A%22Laukevicius%22%7D%7D
  var body = event['body']
  let parts = body.split('&')
  var id_token = ""
  for (let part of parts) {
    if (part.startsWith('id_token')) {
      id_token = part.split('=')[1];
    }
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     "event": event
  //   })
  // };
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp?id_token=' + id_token,
    }
  };

  return callback(null, response);
};


// https://fitpassu.b2clogin.com/fitpassu.onmicrosoft.com/oauth2/authresp?code=AQBJBgOCA_QfdaBlPWZLgu0whTT0ALPqpiTzK7CTmogpuEJiCIX8QLA6zIjhC1zeiP_O_4GKMQZUpcRNJioWA 
//                         lD1pHsfoVuTKa69VJZFatBCYRl2oXpq96JGeZ8Nx_QgUWgd-oRc3OqW2i2smYRBDpGLhe8jxP-kmdEkT5qqoV2-ui789BPB8dXeug4MSsw_iuUgPdm-Fhtm1PJPNpNnFDHlSFUdPOcXgVd7TfCdHkXIYYxpFTPWh1 
//                         fLHU6qT32MeevGnTAYg8PcYWSJ2XolKPx01Y-EV-2RmD0OMJn9mc45iuUUHiGzJB0DpdLUpve8zAFGgKYGP-E6CEPvg3LHEnL4&state=StateProperties%3DeyJTSUQiOiJ4LW1zLWNwaW0tcmM6MzdmMDk2Zj 
//                         UtYmMyNi00YzE4LTlkOTUtMGIyNjFhNDk1NmI3IiwiVElEIjoiZTcxMjAyZDgtN2QwYy00OTY4LWI3ZWYtNGVkNjQ5YWJmMDJhIiwiVE9JRCI6IjA0NGJhOTAzLThmYzUtNDhkYS04ZmU1LTYzM2E4YmM2NTNiNSJ9