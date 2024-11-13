<script>
import { Movie } from "@/models/Media.js";

export default {
  name: "MovieItem",
  props: {
    item: {
      type: Movie,
      required: true,
    }
  },
}
</script>

<template>
  <div class="movie">
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
    <p v-if="item.genre">Genre: {{ item.genre }}</p>
    <p v-if="item.director">Director: {{ item.director }}</p>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
@import 'bootstrap/scss/variables';
$orange: #ff8300;

.card-title {
  font-weight: bold;
  color: $orange;
}
</style>