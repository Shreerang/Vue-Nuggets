<template>
  <div class="nugget-quantity-counter">
    <div @click="decrement">
      <svg
        v-if="this.stepInterval === 1"
        viewBox="0 0 24 24"
        :width="iconDimensions"
        :height="iconDimensions"
      >
        <g>
          <path d="M64 0 M2 11 L2 13 L22 13 L22 11 Z" :fill="minusIconColor"></path>
        </g>
      </svg>
      <div
        v-else
        class="nugget-quantity-step"
        :style="{color: this.minusIconColor, fontSize: this.iconDimensions + 'px'}"
      >-{{ this.stepInterval }}</div>
    </div>
    <input
      v-if="isCountEditable"
      type="number"
      :min="this.count"
      :max="this.maxCount"
      v-model.number="countData"
      @blur="adjustCount"
      @keypress="restrictChars($event)"
    >
    <div v-else>{{countData}}</div>
    <div @click="increment">
      <svg
        v-if="this.stepInterval === 1"
        viewBox="0 0 24 24"
        :width="iconDimensions"
        :height="iconDimensions"
      >
        <g>
          <path
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            :fill="plusIconColor"
          ></path>
        </g>
      </svg>
      <div
        v-else
        class="nugget-quantity-step"
        :style="{color: this.plusIconColor, fontSize: this.iconDimensions + 'px'}"
      >+{{ this.stepInterval }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quantity-selector",
  props: {
    count: {
      type: Number,
      default: 1
    }, // Makes sense to have default product count value
    maxCount: {
      type: Number,
      default: 6
    }, // maxCount makes sense when you have a restriction on the max quantity for a product
    iconDimensions: {
      type: Number,
      default: 15
    },
    stepInterval: {
      type: Number,
      default: 1
    },
    minusIconFillColor: {
      type: String,
      default: "#000"
    },
    plusIconFillColor: {
      type: String,
      default: "#000"
    },
    isCountEditable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      countData: this.count
    };
  },
  computed: {
    minusIconColor: function() {
      return this.countData === this.count ? "#CCC" : this.minusIconFillColor;
    },
    plusIconColor: function() {
      return this.countData === this.maxCount ? "#CCC" : this.plusIconFillColor;
    }
  },
  mounted() {
    this.$emit("get-count", this.countData);
  },
  updated() {
    this.$emit("get-count", this.countData);
  },
  methods: {
    decrement: function() {
      if (this.countData > this.count) {
        if (
          this.stepInterval > 1 &&
          this.countData - this.count < this.stepInterval
        ) {
          this.countData -= this.countData - this.count;
        } else {
          this.countData -= this.stepInterval;
        }
      }
    },
    increment: function() {
      if (this.countData < this.maxCount) {
        if (
          this.stepInterval > 1 &&
          this.maxCount - this.countData < this.stepInterval
        ) {
          this.countData += this.maxCount - this.countData;
        } else {
          this.countData += this.stepInterval;
        }
      }
    },
    adjustCount: function() {
      if (this.countData > this.maxCount) {
        this.countData = this.maxCount;
      } else if (this.countData < this.count) {
        this.countData = this.count;
      } else if (
        this.countData > this.count &&
        this.countData < this.maxCount
      ) {
        this.countData = this.countData;
      } else {
        if (isNaN(Number(this.countData))) {
          this.countData = this.count;
        }
      }
    },
    restrictChars: function($event) {
      if (
        $event.charCode === 0 ||
        /\d/.test(String.fromCharCode($event.charCode))
      ) {
        return true;
      } else {
        $event.preventDefault();
      }
    }
  }
};
</script>

<style>
.nugget-quantity-counter {
  display: inline-flex;
}
.nugget-quantity-counter div:first-child {
  border: solid 1px #ccc;
  border-radius: 5px 0px 0px 5px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}
.nugget-quantity-counter div:nth-child(2) {
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}
.nugget-quantity-counter input[type="number"] {
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  border-left: none;
  border-right: none;
  text-align: center;
  width: 30px;
  padding: 12px;
  margin: 0;
  font-size: 16px;
  -moz-appearance: textfield;
}
.nugget-quantity-counter input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.nugget-quantity-counter .nugget-quantity-step {
  border: none !important;
  font-size: 16px;
}
.nugget-quantity-counter div:last-child {
  border: solid 1px #ccc;
  border-radius: 0px 5px 5px 0px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}
.nugget-quantity-counter > div {
  cursor: pointer;
  padding: 12px;
  min-width: 20px;
  width: auto;
  text-align: center;
  position: relative;
}
.nugget-quantity-counter > div > svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
