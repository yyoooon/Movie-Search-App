export default {
  namespaced: true,
  state() {
    return {
      currentInput: '',
      contents: [],
      currentContent: {},
    }
  },
  mutations: {
    // 서버에서 불러온 데이터를 반응성 변수로 할당해주기
    assignState(state, payload) {
      // 값 말고 key만 뽑기
      Object.keys(payload).forEach((key) => {
        // 배열 통째로 할당하는 것
        state[key] = payload[key]
      })
    },
    accumulateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        // 배열 통째로 할당하는 것
        const {Search} = state[key]
        payload[key] = {
          ...payload[key],
          Search: [...state[key].Search, ...payload[key].Search]
        }
        state[key] = payload[key]
      })
    },
    saveInput(state,inputText) {
      const { title } = inputText
      if(state.currentInput === title) {
        return
      }
      state.currentInput = title
    },
    // currentContent에 누적하는 함수(스크롤 시)
  },
  actions: {
    async readContents({ state, commit }, pageNumber = 1) {
      const contents = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&s=${state.currentInput}&page=${pageNumber}`,
        {
          method: 'GET',
        }
      ).then((res) => res.json())
      commit('assignState', {
        contents,
      })
    },

    async readContent( {commit}, contentId ) {
      const content = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&i=${contentId}&plot=full`,
        {
          contentId,
          method: 'GET',
        }
      ).then((res) => res.json())

      commit('assignState', {
        currentContent: content
      })
    },
  }
}
