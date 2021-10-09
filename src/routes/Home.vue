<template>
  <div class="home__inner">
    <header class="home__header">
      <h1>Movie Search</h1>
    </header>
    <div class="home__search">
      <!-- 컴포넌트 -->
      <SearchForm />
    </div>
    <section class="home__contents">
      <ul>
        <!-- 컴포넌트 -->
        <Content
          v-for="content in contents"
          :key="content.imdbID"
          :content="content"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import SearchForm from '~/components/SearchForm'
import Content from '~/components/Content'

export default {
  components: {
    SearchForm,
    Content
  },
  data() {
    return {
      scrollCount: 2
    }
  },
  computed:{
    contents() {
      return this.$store.state.contents.contents.Search
    }
  },
  created() {
    this.contentSectionInit()
  },
  methods: {
    async contentSectionInit() {
      await this.$store.dispatch('contents/readContents',{
        title: ''
      })
    }
  }
}
// 윈도우 스크롤 이벤트 작성
</script>
<style lang="scss" scoped>
.home__inner {
  max-width: calculate-width(12);
  margin: 0 auto;
  background-color: aliceblue;

  .home__header {
    display: flex;
    align-items: center;
    height: 100px;
    margin-bottom: 40px;
    background-color: aqua;
    h1 {
      font-size: 24px;
    }
  }

  .home__search {
    padding: 0 calculate-width(2) + $gutter;
  }

  .home__contents {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
