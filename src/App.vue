<script>
import axios from "axios";
import LibraryItemList from "./components/LibraryItemList.vue";
import LibraryCollectionsFactory from "./models/LibraryCollectionsFactory";
import LibraryCollection from "./models/LibraryCollection";

export default {
  name: "App",
  components: {
    LibraryItemList,
  },
  data() {
    return {
      searchQuery: "",
      mediaResults: []
    };
  },


  methods: {
    async searchMedia() {
      if (this.searchQuery.trim() !== "") {

        let url = "https://itunes.apple.com/search";
        let params = {
          term: this.searchQuery,
          media: 'music',
          limit: 20
        };
        
        // this.results = new LibraryCollection()

        axios.get(url, {params})
          .then(response => {
            console.log(response.data.results)
            this.mediaResults = LibraryCollectionsFactory.createFromItunes(response.data.results);
            console.log(this.mediaResults)
          })
          .catch(error => {
            console.error("Error fetching data from iTunes API:", error);
          })
          .finally(onfinally => {
            console.log('Done')
          });
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
        <library-item-list :collection="mediaResults"></library-item-list>

        <!-- <div v-for="item in results" :key="item">
          <div class="row mt-4 card">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6" style="height: 200px;">
              {{ item }}
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles for your app */
</style>
