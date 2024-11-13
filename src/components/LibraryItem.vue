<script>
import BookItem from "@/components/BookItem.vue";
import MovieItem from "@/components/MovieItem.vue";
import PodcastItem from "./PodcastItem.vue";
import AudiobookItem from "./AudiobookItem.vue";

export default {
  name: "LibraryItem",
  components: {MovieItem, BookItem, PodcastItem, AudiobookItem},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeFunction: {
      type: Function,
    }
  },
}
</script>

<template>
  <div class="card h-100" >
    <div class="card-body">
      <component :is="item.constructor.type + 'Item'" :item="item" />
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button @click="$emit('delete-item')">Delete w/ Emit</button>
      <button @click="removeFunction(item)">Delete w/ Prop</button>
      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success"
              @click="item.checkOut()">Check Out</button>
      <button v-else-if="item.isAvailable && item.checkOut" class="btn btn-outline-warning"
              @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<style scoped>

</style>