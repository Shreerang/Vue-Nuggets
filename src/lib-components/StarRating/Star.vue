<template>
  <svg
    x="0px"
    y="0px"
    :width="iconDimensions"
    :height="iconDimensions"
    viewBox="0 0 306 306"
    xml:space="preserve"
  >
    <g>
      <polygon
        points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 94.35,187.425 58.65,299.625"
        :fill="this.fillColor ? this.fillColor : this.baseColor"
      ></polygon>
    </g>
  </svg>
</template>

<script>
export default {
  name: "star",
  props: {
    iconDimensions: {
      type: Number
    },
    baseColor: {
      type: String
    },
    fillColor: {
      type: String
    }
  }
};
</script>

<style>
</style>
