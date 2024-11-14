<script>
import { Audiobook } from "@/models/Media";
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
  <div class="card" style="overflow-y: scroll; height: 600px;">
    <img v-if="item.artworkUrl60" :src="item.artworkUrl60" class="card-img-top" alt="Artwork" />
    <div class="card-body">
      <h5 class="card-title">{{ item.collectionName }}</h5>
      <p v-if="item.artistName" class="card-text">
        <strong>Author:</strong> {{ item.artistName }}
      </p>
      <p v-if="item.description" class="card-text">
        <strong>Description:</strong> {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
