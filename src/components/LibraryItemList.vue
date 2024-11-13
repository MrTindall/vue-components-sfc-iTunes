<script>
import LibraryItem from "@/components/LibraryItem.vue";
import LibraryCollection from "@/models/LibraryCollection.js";
import {Book, Movie, Audiobook, Podcast} from "@/models/Media.js";

export default {
  name: "LibraryItemList",
  components: {LibraryItem},
  // this function is run AFTER the props have been passed in
  data() {
    return {
      library: new LibraryCollection()

    }
  },
}
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item">
      <library-item :item="item"
                    @delete-item="library.removeItem(item)"
                    :remove-function="item => library.removeItem(item)"/>
    </div>
  </div>
</template>

<style scoped>

</style>