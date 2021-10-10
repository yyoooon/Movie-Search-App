export default function request(query, opts={method: 'GET'}) {
  const url = `https://www.omdbapi.com?apikey=7035c60c&${query}`
  return fetch(url, opts)
  .then(res => res.json()) 
}

