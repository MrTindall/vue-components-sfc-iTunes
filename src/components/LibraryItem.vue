<template>
  <div class="card h-100">
    <img :src="item.imageUrl" alt="media image" class="card-img-top" />
    <div class="card-body">
      <component :is="item.component" :item="item.props.item" />
    </div>
    <div class="card-footer d-flex justify-content-between">
      <div>
        <p v-if="item.props.author">Author: {{ item.props.author }}</p>
        <p v-if="item.props.director">Director: {{ item.props.director }}</p>
        <p v-if="item.props.artist">Artist: {{ item.props.artist }}</p>
        <p v-if="item.props.author">Author: {{ item.props.author }}</p>
      </div>
      <div class="d-flex justify-content-end">
        <button @click="$emit('delete-item')">Delete w/ Emit</button>
        <button @click="removeFunction(item)">Delete w/ Prop</button>
        <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success"
                @click="item.checkOut()">Check Out</button>
        <button v-else-if="item.isAvailable && item.checkOut" class="btn btn-outline-warning"
                @click="item.checkIn()">Check In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibraryItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeFunction: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
</style>
