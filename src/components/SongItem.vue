<template>
  <div class="song-item">
    <h3 class="card-title">{{ item.trackName }}</h3>
    <p v-if="artist">Artist: {{ artist }}</p>
    <p v-if="album">Album: {{ album }}</p>
  </div>
</template>

<script>
export default {
  name: "SongItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    artist() {
      return this.item.artistName || 'N/A';
    },
    album() {
      return this.item.collectionName || 'N/A';
    }
  }
};
</script>

<style scoped>
.song-item {
  color: #1DB954;
}
</style>
