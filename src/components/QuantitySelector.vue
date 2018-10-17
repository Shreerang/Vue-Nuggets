<template>
    <div class="nugget-quantity-counter">
        <div @click="decrement">
            <svg viewBox="0 0 24 24" :width="iconDimensions" :height="iconDimensions">
                <g>
                    <path d='M64 0 M2 11 L2 13 L22 13 L22 11 Z' :fill="minusIconColor" />
                </g>
            </svg>
        </div>
        <input type="text" v-model="countData" @blur="adjustCount" />
        <div @click="increment">
            <svg viewBox="0 0 24 24" :width="iconDimensions" :height="iconDimensions">
                <g>
                    <path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" :fill="plusIconColor" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
	name: 'quantity-selector',
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
        minusIconFillColor: {
            type: String,
            color: '#000',
        },
        plusIconFillColor: {
            type: String,
            color: '#000',
        },
    },
    data() {
        return {
            countData: this.count
        }
    },
    computed: {
        minusIconColor: function(){
            return this.countData === this.count ? '#CCC' : this.minusIconFillColor
        },
        plusIconColor: function(){
            return this.countData === this.maxCount ? '#CCC' : this.plusIconFillColor
        },
    },
    methods: {
        decrement: function() {
            if(this.countData > this.count){
                this.countData -= 1
            }
        },
        increment: function() {
            if(this.countData < this.maxCount){
                this.countData += 1
            }
        },
        adjustCount: function() {
            if(isNaN(Number(this.countData)) && (this.countData > this.maxCount)){
                this.countData = this.maxCount
            } else if(isNaN(Number(this.countData)) && (this.countData < this.count)) {
                this.countData = this.count
            } else {
                this.countData = this.count
            }
        }
    }
};
</script>

<style scoped>
    .nugget-quantity-counter {
        display: inline-flex;
    }
    .nugget-quantity-counter div:first-child {
        border: solid 1px #ccc;
        border-radius: 5px 0px 0px 5px;
    }
    /*
        We need the following commented CSS only if we want to replace the input box with a read only div
    */
    /* .nugget-quantity-counter div:nth-child(2) {
        border-top: solid 1px #ccc;
        border-bottom: solid 1px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: center;
    } */
    .nugget-quantity-counter input[type="text"] {
        border-top: solid 1px #CCC;
        border-bottom: solid 1px #CCC;
        border-left: none;
        border-right: none;
        text-align: center;
        width: 20px;
        padding: 12px;
        margin: 0;
        font-size: 16px;
    }
    .nugget-quantity-counter div:last-child {
        border: solid 1px #ccc;
        border-radius: 0px 5px 5px 0px;
    }
    .nugget-quantity-counter > div {
        cursor: pointer;
        padding: 12px;
        width: 20px;
        text-align: center;
    }
    .nugget-quantity-counter > div > svg {
        height: 100%;
    }
</style>
