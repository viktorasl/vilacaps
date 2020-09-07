const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event));
    const body = event['body'];
    console.log(body);
    return await fetch('https://appleid.apple.com/auth/token', {
            method: 'post',
            body: body,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
        .then(response => {
            console.log('resp');
            console.log(response);
            console.log(JSON.stringify(response));
            return response.json()
        })
        // .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(JSON.stringify(data))
            
            // const finalBody = {
            //     "access_token":"a030d11f447b34f9eae4b775df9cf712f.0.mrstt.0WEOPfMC8iZiVyNDYXraqg",
            //     "token_type":"Bearer",
            //     "expires_in":3600,
            //     "refresh_token":"r54df82fdd1e445838c44ff3b421e68e6.0.mrstt.hcp0f2WJP2eAeV1tHsjm-Q",
            //     "id_token":"eyJraWQiOiI4NkQ4OEtmIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMiLCJleHAiOjE1OTk1NjU0MTYsImlhdCI6MTU5OTQ3OTAxNiwic3ViIjoiMDAxMjMzLmIzY2NkOTI3YTY0NTRlMDM5ZjQzZWQzMDcyMzY3NzA2LjA4NDYiLCJub25jZSI6IlJFdW1sYXhNMVAxaXhSZjZSUjh6d2c9PSIsImF0X2hhc2giOiJHVlV4eEczb01UU0lVbnI4NVNGU19BIiwiZW1haWwiOiJ2aWt0b3Jhcy5sYXVrZXZpY2l1c0B5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE1OTk0NzkwMTMsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.TffrfPncheuNgEwrGda9X7ybrZYqnh8zeIh2fww0htEjwWnXJ83kQmwM3IJVyPl06vLpmmzu42cEuQDDcir7izM3yWC3nBQ2ym1U5pRUjaOQa6KRmfziCMSHOBdY4oN0kDK0zQYR7Zo_oMZx_5YkvXDxdRTYDXUcwKaRyTCzXdI80X2XFZxdF3ITKR433BV6MpzgdsZm9aaWkMZ9uVF1eVDSFIfsQ-dwI_fcjpq9wZR5ef3gcgtVmVQ7lGfHlXQBKIHu155A4LvrwFMD3nTyDDNWzKHIc7vS1GPvEUeV5rfmg56GxhzAict2Zj6WANZjjRxvkKwW0x-Jeyx7XpB1ng"
            // }
            return {
                statusCode: 200,
                body: JSON.stringify(data)
            }
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            console.log(JSON.stringify(error));
            return { statusCode: 422, body: String(error) }
        });

    // "body": "client_id=com.fitpassu.fitpassu.beta.azureb2c&client_secret=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjVXM0s5UjVTODQifQ.eyJhdWQiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwic3ViIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMiLCJpc3MiOiI2QjM0QVFDWTU1IiwiZXhwIjoxNjAyMDY0NDM3LCJpYXQiOjE1OTk0NjQ0Mzd9.6aSh-vRqa_u12F2WuA3Wms3iLjDfNSNAIWwOqijgYCkJLBTwrUtTzeKETVuzscl6waNCicJKPbwcbYHuM6bbUA&redirect_uri=https%3a%2f%2ffitpassuprod.b2clogin.com%2ffitpassuprod.onmicrosoft.com%2foauth2%2fauthresp&code=c2f5a2667449e43888b239473469af047.0.nrstt.bTJSKX_Syb3kS8r4CEcUuw&grant_type=authorization_code",
	// const response = {
    //     method: 'post',
    //     statusCode: 301,
    //     headers: {
    //         Location: 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp',
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // };
    // return callback(null, response);


    // const id_token = "eyJraWQiOiI4NkQ4OEtmIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMiLCJleHAiOjE1OTkzOTczMjIsImlhdCI6MTU5OTMxMDkyMiwic3ViIjoiMDAxMjMzLmIzY2NkOTI3YTY0NTRlMDM5ZjQzZWQzMDcyMzY3NzA2LjA4NDYiLCJub25jZSI6ImtGb2RIbjdTZS96SUxwTUd5eWUxQXc9PSIsImF0X2hhc2giOiJ3X242RUNPSFhNclk2VWV2bmcwaVdBIiwiZW1haWwiOiJ2aWt0b3Jhcy5sYXVrZXZpY2l1c0B5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE1OTkzMTA5MTksIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.IvMbW6T3CCl3OfhDMIrr_9yEAv5jtIEK4CqDAmDqE3M_u5jCwhd6dfaBgpvePyzzuf8doqrDIaB2wyKyQRFgAKHTTE5DKP4k_EX85O4cTr3pt8Z5t0RLEqUpJzubxkJpuLWvf1o3LYECJxTjdkpd071B-FJUdnEyJrvWXAPGQkDxXGEQtVkgf4mSlSgzaaWLdRoetUIqcCc35pCG962-JF30OhYNW5G5SWBaQF66u758XCBw--2t7TYJ7Izfg9C5ZHOdEXMD-Ki-Gh8oYWuDaAYO5ogNeHCXzI9Of_p1zJfl2VMf4jhjvlHiF-yJ8n7QzYU6LBMWs4PVdvZ58pb6Yw"
    // const rawBody = event["body"]
    // let parts = rawBody.split('&')
    // var redirect_uri = ""
    // for (let part of parts) {
    //     if (part.startsWith('redirect_uri=')) {
    //         redirect_uri = part.split('=')[1];
    //     }
    // }

    // const body = {
    //     "access_token" : id_token,
    //     "token_type" : "Bearer",
    //     "expires_in" : 3600,
    //     "scope"      : "openid email",
    //     "refresh_token" : "a9VpZDRCeFh3Nkk2VdY",
    //     "id_token" : id_token
    // }
    // console.log(JSON.stringify(body));
    // const response = {
    //     method: 'post',
    //     statusCode: 301,
    //     headers: {
    //         Location: 'https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp',
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // };
    // return callback(null, response);
    // console.log(redirect_uri);

    // return await fetch('https://fitpassuprod.b2clogin.com/fitpassuprod.onmicrosoft.com/oauth2/authresp', {
    //     method: 'get',
    //         body: JSON.stringify(body),
    //         headers: {'Content-Type': 'application/json'} })
    //     .then(response => {
    //         console.log('resp');
    //         console.log(response);
    //         console.log(JSON.stringify(response));
    //     })
    //     // .then(response => response.json())
    //     // .then(data => {
    //     //     console.log("data");
    //     //     console.log(JSON.stringify(data))
    //     //     return {
    //     //         statusCode: 200,
    //     //         body: JSON.stringify(data)
    //     //     }
    //     // })
    //     .catch(error => {
    //         console.log("err");
    //         console.log(error);
    //         console.log(JSON.stringify(error));
    //         return { statusCode: 422, body: String(error) }
    //     });
    // // return callback(null, response);
}
