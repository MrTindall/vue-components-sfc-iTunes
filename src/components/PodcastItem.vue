<script>
export default {
  name: "PodcastItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
}
</script>

<template>
  <div class="podcast">
    <h3 class="card-title">{{ item.collectionName }}</h3>
    <p v-if="item.artistName">By: {{ item.artistName }}</p>
    <p v-if="item.collectionPrice">Price: ${{ item.collectionPrice }}</p>
  </div>
</template>

<style scoped lang="scss">
  $purple: #800080;
  .card-title {
    font-weight: bold;
    color: $purple;
  }
</style>
