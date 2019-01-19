<template>
  <svg
    id="bag"
    x="0px"
    y="0px"
    :height="this.iconDimensions"
    :width="this.iconDimensions"
    viewBox="0 0 200.745 200.745"
  >
    <g>
      <path :fill="this.fillColor" :d="this.iconPath"></path>
    </g>
    <g>
      <text
        y="150"
        transform="translate(100)"
        :font-size="this.fontSize"
        :fill="this.fontColor"
        text-anchor="middle"
      >
        <tspan class="num-items">{{ this.bagCount }}</tspan>
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  name: "bag-count",
  props: {
    iconDimensions: {
      type: Number,
      default: 40
    },
    iconPath: {
      type: String,
      default:
        "M177.91,55.377h-22.589v-1.368C155.311,24.25,131.091,0,101.302,0C71.503,0,47.292,24.25,47.292,54.009v1.368H24.704L11.495,202.614h179.624L177.91,55.377L177.91,55.377z M101.302,6.624c19.687,0,36.619,12.105,43.761,29.232c-9.448-14.137-25.5-23.478-43.761-23.478c-18.231,0-34.313,9.34-43.77,23.507C64.713,18.729,81.635,6.624,101.302,6.624z M57.297,55.377c4.406-20.263,22.481-35.485,44.024-35.485c21.582,0,39.618,15.222,44.024,35.485H57.297z"
    },
    fillColor: {
      type: String,
      default: "#42b983"
    },
    fontSize: {
      type: Number,
      default: 80
    },
    fontColor: {
      type: String,
      default: "#FFF"
    },
    bagCount: {
      type: Number
    }
  }
};
</script>