exports.handler = async (event, context, callback) => {
  console.log(JSON.stringify(event));
  console.log("OK");
  return {
      statusCode: 200,
      body: JSON.stringify({})
  }
}