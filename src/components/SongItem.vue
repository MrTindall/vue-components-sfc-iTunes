<script>
import { Song } from '@/models/Media'
export default {
  name: "SongItem",
  props: {
    item: {
      type: Song,
      required: true
    }
  },
  computed: {

  }
};
</script>

<template>
  <div class="song-item">
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
    <p v-if="item.genre">Genre: {{ item.genre }}</p>
    <p v-if="item.artist">Aritist: {{ item.director }}</p>
    <p v-if="item.runtime">Runtime: {{ item.runtime }}</p>
  </div>
</template>

<style scoped>
.song-item {
  color: #1DB954;
}
</style>
