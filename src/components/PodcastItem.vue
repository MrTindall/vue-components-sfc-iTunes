<script>
import { Podcast } from '@/models/Media';
export default {
  name: "PodcastItem",
  props: {
    item: {
      type: Podcast,
      required: true,
    }
  },
}
</script>

<template>
  <div class="podcast">
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
    <p v-if="item.genre">Genre: {{ item.genre }}</p>
    <p v-if="item.author">Author: {{ item.director }}</p>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
  </div>
</template>

<style scoped lang="scss">
  $purple: #800080;
  .card-title {
    font-weight: bold;
    color: $purple;
  }
</style>
