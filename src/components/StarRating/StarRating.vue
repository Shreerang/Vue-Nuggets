<template>
    <div>
        <component v-for="n of this.totalStars" :key="n" :is="currentComponent(n)" :fillColor="colorType(n)" :baseColor="baseColor" :rating="rating"></component>
    </div>
</template>

<script>
// Can Star and PartialStar components be dynamically imported?
import Star from "./Star"
import PartialStar from "./PartialStar"

// Using a global variable like this - Good or bad?
let isPartialRendered = false
export default {
    name: 'star-rating',
    components: {
        Star,
        PartialStar
    },
    props: {
        totalStars: {
            type: Number,
            default: 5
        },
        rating: {
            type: Number,
            required: true
        },
        fillColor: {
            type: String,
            default: '#C00'
        },
        baseColor: {
            type: String,
            default: '#666'
        },
    },
    methods: {
        currentComponent: function (count) {
            const int_part = Math.trunc(this.rating);
            if(count > int_part && isPartialRendered === false) {
                isPartialRendered = true;
                // Re-setting the isPartialRendered flag here, for cases where the Partial SVG is the last SVG
                if(count === this.totalStars){
                    isPartialRendered = false;
                }
                return 'PartialStar'
            } else {
                if(count === this.totalStars){
                    isPartialRendered = false;
                }
                return 'Star'
            }
        },
        colorType: function(n) {
            return this.rating - n > -1 ? this.fillColor : this.baseColor
        }
    }
}
</script>

<style scoped>

</style>
