export default {
  namespaced: true,
  state() {
    return {
      contents:[],
      currentContent:{},
      currentContentTitle:''
    }
  },
  mutations: {
    // 서버에서 불러온 데이터를 반응성 변수로 할당해주기
    assignState(state, payload) {
        // 값 말고 key만 뽑기
      Object.keys(payload).forEach(key => {
        // 배열 통째로 할당하는 것
        state[key] = payload[key] 
      })
    },
    assignTitle(inputText) {
      const { title } = inputText
      this.currentContentTitle = title
    }
  },
  actions: {
    async readContents({ commit }, payload) {
      const {title, pageNumber = 1 } = payload
      
      const contents = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${title}&page=${pageNumber}`, {
        method: 'GET',
      }).then(res => res.json())

      commit('assignState', {
        contents
      })
    },
  }
}

// async function _request(options) {
//   return await fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=3', {
//     method: 'POST',
//     body: JSON.stringify(options)
//   }).then(res => res.json())
// }
