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
  <div class="card" style="overflow-y: scroll; height: 600px;">
    <img v-if="item.artworkUrl60" :src="item.artworkUrl60" class="card-img-top" alt="Artwork" />
    <div class="card-body">
      <h5 class="card-title">{{ item.collectionName }}</h5>
      <p v-if="item.artistName" class="card-text">
        <strong>Director:</strong> {{ item.artistName }}
      </p>
      <p v-if="item.trackTimeMillis" class="card-text">
        <strong>Runtime:</strong> {{ item.trackTimeMillis }} minutes
      </p>
      <p v-if="item.longDescription" class="card-text">
        <strong>Description:</strong> <span v-html="item.longDescription"></span>
      </p>
    </div>
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