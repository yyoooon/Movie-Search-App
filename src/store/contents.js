import request from '~/utils/fetch'

export default {
  namespaced: true,

  state() {
    return {
      currentInput: '',
      contents: [],
      nextContents:[],
      currentContent: {},
    }
  },

  mutations: {
    saveInput(state,inputText) {
      const { title } = inputText
      if(state.currentInput === title) {
        return
      }
      state.currentInput = title
    },
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },

    // state의 데이터에(proxy)에 새로 받아온 데이터(일반obj)를 누적하기 위해
    // 새로 받아온 데이터를 nextContents에 할당한 후, 다시 받아와서 (proxy로 변환)누적함
    accumulateState(state, { nextContents }) {
      state.nextContents = nextContents
      state.contents.Search = [...state.contents.Search, ...state.nextContents.Search]
    },
  },

  actions: {
    async readContents({ state, commit }, pageNumber = 1) {
      const contents = await request(`s=${state.currentInput}&page=${pageNumber}`)
      console.log(state.currentInput)
      //같은 검색어에서 스크롤 시 
      if (pageNumber > 1) {
        commit('accumulateState', {
          nextContents:contents,
        })
        return
      }
      //검색어 입력 시 
      commit('assignState', {
        contents,
      })
    },
    async readContent( {commit}, contentId ) {
      const content = await request(`i=${contentId}&plot=full`)
      commit('assignState', {
        currentContent: content
      })
    },
  }
}
