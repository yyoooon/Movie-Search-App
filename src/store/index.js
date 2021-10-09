// store는 주로 서버에서 가져오는 데이터들을 조작하고 관련 기능을 만든다
// 각 컴포넌트에서는 화면에 관련한 데이터를 지정해서 사용한다

import { createStore } from 'vuex'
import contents from './contents'

export default createStore({
  modules: {
    contents,
  },
})
