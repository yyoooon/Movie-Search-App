// export default {
//   // 커스텀 함수, 변수를 install 함수 안에다가 작성
//   // 어디에 설치할 것인지? app(루트 컴포넌트) / 플러그인 등록 시의 옵션
//   install(app, options) {
//     app.config.globalProperties.$fetch = (query, opts={method: 'GET'}) => {
//       const url = `https://www.omdbapi.com?apikey=7035c60c&${query}`
//       return fetch(url, opts)
//       .then(res => res.json()) // 반환된 값에 then, await를 붙여서 사용하면 됨
//     }
//   }
// }

export default function request(query, opts={method: 'GET'}) {
  const url = `https://www.omdbapi.com?apikey=7035c60c&${query}`
  return fetch(url, opts)
  .then(res => res.json()) 
}