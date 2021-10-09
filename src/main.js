import { createApp } from 'vue'
import App from '~/App.vue'
import store from '~/store'
import router from '~/routes'

// 작성한 파일에서 객체를 가져온 후 use함수로  등록해준다 / 2번째 인수는 플러그인 등록 시의 옵션
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
