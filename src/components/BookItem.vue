<template>
  <div class="card">
    <img :src="item.imageUrl" class="card-img-top" alt="book cover" />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text"><strong>Author:</strong> {{ item.author }}</p>
      <p class="card-text"><strong>Pages:</strong> {{ item.pages }}</p>
      <p v-if="item.isAvailable" class="text-success">Available</p>
      <p v-else class="text-danger">Checked Out</p>

      <div v-if="item.isAvailable">
        <button class="btn btn-outline-success" @click="checkOut">Check Out</button>
      </div>
      <div v-else>
        <button class="btn btn-outline-warning" @click="checkIn">Check In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    checkOut() {
      console.log(`Checked out book: ${this.item.title}`);
      this.item.isAvailable = false;
    },
    checkIn() {
      console.log(`Checked in book: ${this.item.title}`);
      this.item.isAvailable = true;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
</style>
