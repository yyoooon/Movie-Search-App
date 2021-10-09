<template>
  <h1>{{ content.Title }}</h1>
  <img
    :src="content.Poster"
    alt="poster" />
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