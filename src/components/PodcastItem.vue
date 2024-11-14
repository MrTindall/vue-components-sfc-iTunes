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
  <div class="card" style="overflow-y: scroll; height: 600px;">
    <img v-if="item.artworkUrl60" :src="item.artworkUrl60" class="card-img-top" alt="Artwork" />
    <div class="card-body">
      <h5 class="card-title">{{ item.collectionName }}</h5>
      <p v-if="item.artistName" class="card-text">
        <strong>Host:</strong> {{ item.artistName }}
      </p>
      <p v-if="item.primaryGenreName" class="card-text">
        <strong>Genre:</strong> {{ item.primaryGenreName }}
      </p>
      <p v-if="item.trackTimeMillis" class="card-text">
        <strong>Runtime:</strong> {{ item.trackTimeMillis }} minutes
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
