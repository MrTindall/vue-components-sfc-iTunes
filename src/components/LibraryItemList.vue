<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
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
      required: true,
    }
  },
  methods: {
    removeItem(item) {
      this.$emit("delete-item", item);
    }
  }
};
</script>
