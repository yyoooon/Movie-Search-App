const axios = require('axios')

exports.handler = async function (event) {
  const options = JSON.parse(event.body)
  const { id = '', method, body} = options 
  const res = await axios({
    url: `https://kdt.roto.codes/documents/${id}`,
    method,
    headers: {
      'Content-Type' : 'application/json',
      'x-username': 'yoon'
    },
    data:body
  })
  return {
    statusCode: 200,
    body:JSON.stringify(res.data)
  }
}