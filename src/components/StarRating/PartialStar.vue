<template>
    <svg x="0px" y="0px" :width="iconDimensions" :height="iconDimensions" viewBox="0 0 306 306" xmlSpace="preserve">
        <defs>
            <linearGradient :id="this.randomId">
            <stop offset="0%" :stop-color="this.fillColor" />
            <stop :offset="this.offsetValue" :stop-color="this.fillColor" />
            <stop :offset="this.offsetValue" :stop-color="this.baseColor" />
            <stop offset="100%" :stop-color="this.baseColor" />
            </linearGradient>
        </defs>
        <g :fill="'url(#' + this.randomId + ')'">
            <polygon points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 94.35,187.425 58.65,299.625" />
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'partial-star',
        props: {
            rating: {
                type: Number,
                required: true
            },
            iconDimensions: {
                type: Number,
                default: 20,
            },
            baseColor: {
                type: String,
                default: '#666'
            },
            fillColor: {
                type: String,
                default: '#c00'
            }
        },
        data() {
            return{
                // Is this the right way to do things?
                randomId: "partialFill_" + Date.now()
            }
        },
        computed: {
            offsetValue : function() {
                const int_part = Math.trunc(this.rating);
                let float_part = Number((this.rating - int_part).toFixed(2));
                return float_part*100 + "%"
            }
        }
    };
</script>

<style scoped>
</style>
