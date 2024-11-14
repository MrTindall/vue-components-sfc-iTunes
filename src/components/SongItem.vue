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

  <div>
    <h5 class="card-title">{{ item.trackName }}</h5>
    <p v-if="item.trackTimeMillis">Runtime: {{ item.trackTimeMillis }}</p>
    <p v-if="item.primaryGenreName">Genre: {{ item.primaryGenreName }}</p>
    <p v-if="item.artistName">Aritist: {{ item.artistName }}</p>
  </div>
</template>

<style scoped>
.song-item {
  color: #1DB954;
}
</style>
