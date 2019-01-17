<template>
  <div v-if="scrollPosY > 10" class="nugget-stt" @click="scrollToTop">
    <svg
      x="0px"
      y="0px"
      :viewBox="iconViewBox"
      xml:space="preserve"
      :width="iconDimensions"
      :height="iconDimensions"
    >
      <g>
        <path :d="iconPath" :fill="fillColor"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "scroll-to-top",
  props: {
    iconDimensions: {
      type: Number,
      default: 20
    },
    iconPath: {
      type: String,
      default:
        "M5.906,34.998c-1.352,1.338-3.541,1.338-4.893,0c-1.35-1.338-1.352-3.506,0-4.846l19.54-19.148c1.352-1.338,3.543-1.338,4.895,0l19.539,19.148c1.352,1.34,1.352,3.506,0,4.846c-1.352,1.338-3.541,1.338-4.893,0L23,19.295L5.906,34.998z"
    },
    iconViewBox: {
      type: String,
      default: "0 0 46.001 46.001"
    },
    fillColor: {
      type: String,
      default: "#42b983"
    }
  },
  data() {
    return {
      scrollPosY: this.handleScroll
    };
  },
  methods: {
    scrollToTop: function() {
      window.scrollTo(0, 0);
    },
    handleScroll: function() {
      this.scrollPosY = window.scrollY;
    }
  },
  mounted() {
    // Register an event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // Un-register an event listener
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.nugget-stt {
  position: fixed;
  margin: 11px;
  padding: 10px;
  border: solid 1px #DDD;
  border-radius: 50%;
  right: 0;
  bottom: 0;
  width: 26px;
  text-align: center;
  background: #eee;
  cursor: pointer;
}
</style>
