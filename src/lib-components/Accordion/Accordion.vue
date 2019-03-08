<template>
  <div class="nugget-accordion-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Accordion",
};
</script>

<style>
  .nugget-accordion-container {
    padding: 10px 0;
  }
</style>
