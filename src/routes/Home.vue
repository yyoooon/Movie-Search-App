<template>
  <div class="home__inner">
    <header class="home__header">
      <h1>Movie Search</h1>
    </header>
    <div class="home__search">
      <SearchForm />
    </div>
    <section class="home__contents">
      <ul>
        <Content
          v-for="content in contents"
          :key="content.imdbID"
          :content="content"
          @click="readContent($event, content.imdbID)" />
      </ul>
    </section>
    <div class="top-button">
      <a href="#header">Top</a>
    </div>
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
    this.readContents()
  },
  mounted() {
    let timer = null
    window.addEventListener('scroll', () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          const isScrollEnded =
          window.innerHeight + window.scrollY + 400 >= document.body.offsetHeight
          if (isScrollEnded) {
            this.readContents(this.scrollCount)
            this.scrollCount++
          }
        }, 200)
      }
    })
  },
  methods: {
    async readContents(pageNumber) {
      await this.$store.dispatch('contents/readContents', pageNumber)
    },
    async readContent($event, contentId) {
      await this.$store.dispatch('contents/readContent', contentId)
      this.$router.push({
        name: 'content',
        params: {
          id:contentId
        }
      })
    }
  }
}
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
    background-color: aqua;
    h1 {
      font-size: 24px;
    }
  }

  .home__search {
    padding: 40px calculate-width(2) + $gutter;
    background-color: white;
  }

  .home__contents {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    a {
      display: block;
      padding: 10px;
      background-color: gray;
    }
  }

}
</style>
