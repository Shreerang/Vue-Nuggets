<template>
  <section class="nugget-accordion-item">
    <div class="nugget-accordion-title" @click="toggle($vnode.key)">
      <div :class="varianceClassObject(iconPos)">
        <svg viewBox="0 0 24 24" :width="iconDimensions" :height="iconDimensions">
          <g>
            <path
              :d="showStatus ? collapseIconPath : expandIconPath"
              :fill="showStatus ? collapseIconColor : expandIconColor"
            ></path>
          </g>
        </svg>
      </div>
      <slot name="accordion-title"></slot>
    </div>
    <transition name="slide-fade">
      <div class="nugget-accordion-content" v-show="showStatus">
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    showContent: {
      type: Boolean,
      default: false,
      required: true
    },
    iconPos: {
      type: String,
      default: "right"
    },
    expandIconPath: {
      type: String,
      default:
        "M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
    },
    collapseIconPath: {
      type: String,
      default: "M64 0 M2 11 L2 13 L22 13 L22 11 Z"
    },
    expandIconColor: {
      type: String,
      default: "#000"
    },
    collapseIconColor: {
      type: String,
      default: "#000"
    },
    iconDimensions: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      showStatus: this.showContent
    };
  },
  methods: {
    toggle: function(index) {
      this.showStatus = !this.showStatus;
    },
    varianceClassObject: function(variance, index) {
      return {
        "nugget-accordion-icon-right": this.iconPos === "right",
        "nugget-accordion-icon-left": this.iconPos === "left"
      };
    }
  }
};
</script>

<style>
.nugget-accordion-title {
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border-bottom: solid 1px #ccc;
}

.nugget-accordion-content {
  padding: 10px;
}
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.nugget-accordion-icon-right {
  float: right;
  margin-left: 5px;
}

.nugget-accordion-icon-left {
  float: left;
  margin-right: 5px;
}
</style>
