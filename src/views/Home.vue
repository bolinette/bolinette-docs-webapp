<template>
  <div class="px-6">
    <img
      src="../assets/logo.png"
      alt="Bolinette Logo"
      class="mt-12 sm:mt-28 w-40 sm:w-52 mx-auto"
    />
    <div class="text-center mt-8 lg:mt-12 text-6xl font-medium">Bolinette</div>
    <div class="text-center font-medium text-gray-600 text-2xl mt-4">
      The fast and easy Python web framework
    </div>
    <div class="text-center mt-16">
      <span
        class="bg-black hover:bg-gray-800 cursor-pointer text-white px-6 py-4 text-2xl rounded-md"
      >
        <router-link to="/docs">Documentation</router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
