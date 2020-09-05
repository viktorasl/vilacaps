const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));

  return await fetch('https://appleid.apple.com/auth/token', {
    method: 'post',
		body: JSON.stringify(event['body']),
    headers: {'Content-Type': 'application/json'} })
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data))
      return {
        statusCode: 200,
        body: ""
      }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
  // client_id=com.fitpassu.fitpassu.beta.azureb2c&
  // client_secret=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjVXM0s5UjVTODQifQ.eyJhdWQiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwic3ViIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMiLCJpc3MiOiI2QjM0QVFDWTU1IiwiZXhwIjoxNjAxOTAwMTU3LCJpYXQiOjE1OTkzMDAxNTd9.3Lbh62R3nXbhjDpVmFFzyrd0S2f2NWL9_sp3Hwzxtyw2tZldGjhaGCqhF0nvUYAbeavBO1kh1TLUhWN7Z7hJ7w&
  // redirect_uri=https%3a%2f%2ffitpassuprod.b2clogin.com%2ffitpassuprod.onmicrosoft.com%2foauth2%2fauthresp&
  // code=cc21e402966fe4a74a2c170d586d0358a.0.nrstt.hNka32sief2VynO1wAhWsg&
  // grant_type=authorization_code
};

// exports.handler = async (event, context, callback) => {
//   console.log(JSON.stringify(event));
//   console.log(JSON.stringify(context));

//   var body = event['body']
//   let parts = body.split('&')
//   var code = ""
//   var state = ""
//   for (let part of parts) {
//     if (part.startsWith('code')) {
//       code = part.split('=')[1];
//     }
//     if (part.startsWith('state')) {
//       state = part.split('=')[1];
//     }
//   }
//   var ref = event['headers']['referer']
//   var nonce = ""
//   for (let part of ref) {
//     if (part.startsWith('nonce')) {
//       nonce = part.split('=')[1];
//     }
//   }

//   loc = 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp?code=' + code + '&state=' + state + '&nonce=' + nonce
//   bd = JSON.stringify({
//     location: loc
//   });
//   console.log(bd);
//   // return {
//   //   statusCode: 200,
//   //   body: bd
//   // }
//   const response = {
//     statusCode: 301,
//     headers: {
//       Location: loc
//     }
//   };

//   return callback(null, response);
// };