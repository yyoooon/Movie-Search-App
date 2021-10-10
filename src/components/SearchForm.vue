<template>
  <form @submit.prevent="saveInput();readContents()">
    <input
      v-model.lazy.trim="title"
      type="text" />
    <button>search</button>
  </form> 
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.$store.state.contents.currentInput
  },
  methods: {
    saveInput() {
      this.$store.commit('contents/saveInput',{
        title: this.title
      })
    },
    async readContents() {
      await this.$store.dispatch('contents/readContents')
    },
  }
}
</script>

<style lang="scss" scoped>
  form {
        display: flex;
        height: 50px;
        margin-bottom: 40px;
        input {
          flex-grow: 1;
          padding: 0 20px;
          height: 100%;
          background-color: burlywood;
        }
        button {
          flex-shrink: 0;
          width: calculate-width(2);
          height: 100%;
          background-color:bisque;
        }
      }
</style>