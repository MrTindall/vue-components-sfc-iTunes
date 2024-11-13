<template>
  <div class="movie-item">
    <h3 class="card-title">{{ item.trackName }}</h3>
    <p v-if="director">Director: {{ director }}</p>
    <p v-if="runtime">Runtime: {{ runtime }} min</p>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    director() {
      return this.item.artistName || 'N/A';
    },
    runtime() {
      return this.item.collectionTime ? (this.item.collectionTime / 60).toFixed(0) : 'N/A';
    }
  }
};
</script>

<style scoped>
.movie-item {
  color: #ff8300;
}
</style>
