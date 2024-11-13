<script>
import { Audiobook } from "@/models/Media.js";
export default {
  name: "AudiobookItem",
  props: {
    item: {
      type: Audiobook,
      required: true,
    }
  },
}
</script>

<template>
  <div class="audiobook">
    <h3 class="card-title">{{ item.collectionName }}</h3>
    <p v-if="item.collectionPrice">Price: ${{ item.collectionPrice }}</p>
    <p v-if="item.trackCount">Tracks: {{ item.trackCount }}</p>
  </div>
</template>

<style scoped lang="scss">
  $blue: #007bff;
  .card-title {
    font-weight: bold;
    color: $blue;
  }
</style>
