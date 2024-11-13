<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <!-- Loop over the 'library' prop and display each item -->
    <div class="col" v-for="(item, index) in library" :key="index">
      <library-item 
        :item="item" 
        @delete-item="removeItem(item)" 
        :remove-function="removeItem" />
    </div>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem.vue";

export default {
  name: "LibraryItemList",
  components: { LibraryItem },
  props: {
    library: {
      type: Array,
      required: true,  // Accepts the array of results from the parent
    }
  },
  methods: {
    removeItem(item) {
      // Implement any custom logic for removing items (if needed)
      this.$emit("delete-item", item);
    }
  }
};
</script>
