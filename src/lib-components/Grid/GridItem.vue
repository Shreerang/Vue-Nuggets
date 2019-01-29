<template>
  <div class="nugget-grid-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "grid-item"
};
</script>

<style>
.nugget-grid-item {
  padding: 10px;
  text-align: center;
}
</style>
