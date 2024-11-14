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

  <div class="card" style="overflow-y: scroll; height: 600px;">
    <img v-if="item.artworkUrl60" :src="item.artworkUrl60" class="card-img-top" alt="Artwork" />
    <div class="card-body">
      <h5 class="card-title">{{ item.trackName }}</h5>
      <p v-if="item.trackTimeMillis" class="card-text">
        <strong>Runtime:</strong> {{ item.trackTimeMillis }} minutes
      </p>
      <p v-if="item.primaryGenreName" class="card-text">
        <strong>Genre:</strong> {{ item.primaryGenreName }}
      </p>
      <p v-if="item.artistName" class="card-text">
        <strong>Artist:</strong> {{ item.artistName }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.song-item {
  color: #1DB954;
}
</style>
