<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count = count + 1">
    Click me
  </button>
  <p>You clicked me {{ count }} times.</p>
</template>
