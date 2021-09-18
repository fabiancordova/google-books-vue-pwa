<template>
<div class="Title">
  <div>
    <h1 class="fs-2 sm text-white bg-success p-2">
      {{ msgString }} {{ msgVar.toUpperCase() }} has
      {{ countBooks != 0 ? countBooks : "" }} books
    </h1>

  
  </div>    
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Title",
  props: {
    msgString: String,
    msgVar: String
  },
  computed: {
    ...mapState(["author"]),
    ...mapGetters(["countBooks"]),
  }
};
</script>

