<template>
  <div class="search-form">
    <input 
      type="text" 
      v-model="query" 
      placeholder="Search for a song, movie, podcast, etc."
      class="form-control mb-3" 
      @keyup.enter="searchMedia"
    />
    <button class="btn btn-primary" @click="searchMedia">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchMedia() {
      if (this.query.trim()) {
        this.$emit("search", this.query);
      }
    }
  }
};
</script>

<style scoped>
.search-form {
  max-width: 500px;
  margin: 0 auto;
}
</style>
