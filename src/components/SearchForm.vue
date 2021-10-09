<template>
  <form @submit.prevent="getContent">
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
  methods: {
    async getContent() {
      await this.$store.dispatch('contents/readContents',{
        title: this.title
      })
    },
    assignTitle() {
      this.$store.commit('contents/assignTitle',{
        title: this.title
      })
    }
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