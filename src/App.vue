<script>
import axios from "axios";
import mediaFactory from "@/models/MediaFactory.js";
import LibraryItemList from "./components/LibraryItemList.vue";

export default {
  name: "App",
  components: {
    LibraryItemList,
  },
  data() {
    return {
      searchQuery: "",
      results: []
    };
  },

  methods: {
    async searchMedia() {
      if (this.searchQuery.trim() === "") return;

      try {
        const response = await axios.get("https://itunes.apple.com/search", {
          params: {
            term: this.searchQuery,
            media: "all",
            limit: 20
          }
        });

        this.results = response.data.results.map(item => {
          console.log(item)
          // return mediaFactory(item);
          const { component, props } = mediaFactory(item);
          // console.log({ component, props })
          return { component, props };
        });
      } catch (error) {
        console.error("Error fetching data from iTunes API:", error);
      }
    }
  }
};
</script>

<template>
  <div>
    <nav class="navbar bg-dark">
      <span class="navbar-brand text-light">
        <i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!
      </span>
    </nav>

    <div class="container-fluid mt-3">
      <form @submit.prevent="searchMedia">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="searchQuery"
            placeholder="Search for a song, artist, movie, etc." aria-label="Search" />
          <button class="btn btn-primary" type="submit">Search</button>
        </div>
      </form>

      <!-- <div class="row mt-4">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">

        </div>
      </div> -->
      <div class="container-fluid mt-3">
        <library-item-list :library="results"></library-item-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles for your app */
</style>
