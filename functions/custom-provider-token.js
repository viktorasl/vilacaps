const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event));
    const id_token = "eyJraWQiOiI4NkQ4OEtmIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmZpdHBhc3N1LmZpdHBhc3N1LmJldGEuYXp1cmViMmMiLCJleHAiOjE1OTkzOTczMjIsImlhdCI6MTU5OTMxMDkyMiwic3ViIjoiMDAxMjMzLmIzY2NkOTI3YTY0NTRlMDM5ZjQzZWQzMDcyMzY3NzA2LjA4NDYiLCJub25jZSI6ImtGb2RIbjdTZS96SUxwTUd5eWUxQXc9PSIsImF0X2hhc2giOiJ3X242RUNPSFhNclk2VWV2bmcwaVdBIiwiZW1haWwiOiJ2aWt0b3Jhcy5sYXVrZXZpY2l1c0B5YWhvby5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE1OTkzMTA5MTksIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.IvMbW6T3CCl3OfhDMIrr_9yEAv5jtIEK4CqDAmDqE3M_u5jCwhd6dfaBgpvePyzzuf8doqrDIaB2wyKyQRFgAKHTTE5DKP4k_EX85O4cTr3pt8Z5t0RLEqUpJzubxkJpuLWvf1o3LYECJxTjdkpd071B-FJUdnEyJrvWXAPGQkDxXGEQtVkgf4mSlSgzaaWLdRoetUIqcCc35pCG962-JF30OhYNW5G5SWBaQF66u758XCBw--2t7TYJ7Izfg9C5ZHOdEXMD-Ki-Gh8oYWuDaAYO5ogNeHCXzI9Of_p1zJfl2VMf4jhjvlHiF-yJ8n7QzYU6LBMWs4PVdvZ58pb6Yw"
    const rawBody = event["body"]
    let parts = rawBody.split('&')
    var redirect_uri = ""
    for (let part of parts) {
        if (part.startsWith('redirect_uri=')) {
            redirect_uri = part.split('=')[1];
        }
    }

    const body = {
        "access_token" : id_token,
        "token_type" : "Bearer",
        "expires_in" : 3600,
        "scope"      : "openid email",
        "refresh_token" : "a9VpZDRCeFh3Nkk2VdY",
        "id_token" : id_token
    }
    console.log(JSON.stringify(body));
    // const response = {
    //     method: 'post',
    //     statusCode: 301,
    //     headers: {
    //         Location: redirect_uri,
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // };

    return await fetch(redirect_uri, {
        method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'} })
        .then(response => response.json())
        .then(data => {
        console.log(JSON.stringify(data))
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return { statusCode: 422, body: String(error) }
        });
    // return callback(null, response);
}
