<template>
  <div class="content-details">
    <section class="poster">
      <img
        :src="content.Poster"
        alt="movie poster" />
    </section>
    <section class="detail-info">
      <h1>{{ content.Title }}</h1>
      <p>평점:{{ content.Ratings[0].Value }}</p>
      <p>상영 시간:{{ content.Runtime }}</p>
      <p>장르:{{ content.Genre }}</p>
      <p>감독:{{ content.Director }}</p>
      <p>{{ content.Plot }}</p>
    </section>
  </div>
  <button @click="$router.push('/')">
    목록으로
  </button>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.contents.currentContent
    }
  } 
}
</script>

<style lang="scss">
  .content-details {
    display: flex;
  }
</style>

