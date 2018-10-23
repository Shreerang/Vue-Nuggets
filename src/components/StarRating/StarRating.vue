<template>
    <div>
        <!-- Is this use of dynamic component correct? -->
        <component v-for="n of this.totalStarsData" :key="n" :is="currentComponent(n)" :fillColor="ratingData - n > -1 ? fillColorData : baseColorData" :baseColor="baseColorData" :rating="ratingData"></component>
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
    data(){
        return {
            // Any better way of converting props to data?
            // Also maybe naming convention best practices?
            totalStarsData: this.totalStars,
            ratingData: this.rating,
            fillColorData: this.fillColor,
            baseColorData: this.baseColor,
        }
    }, 
    methods: {
        currentComponent: function (count) {
            const int_part = Math.trunc(this.ratingData);
            if(count > int_part && isPartialRendered === false) {
                isPartialRendered = true;
                // Re-setting the isPartialRendered flag here, for cases where the Partial SVG is the last SVG
                if(count === this.totalStarsData){
                    isPartialRendered = false;
                }
                return 'PartialStar'
            } else {
                if(count === this.totalStarsData){
                    isPartialRendered = false;
                }
                return 'Star'
            }
            
        }
    }
}
</script>

<style scoped>

</style>
