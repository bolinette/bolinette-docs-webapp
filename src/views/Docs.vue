<template>
  <div>
    /docs
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("setup");
    console.log(process.env.API_URL);
  }
});
</script>
