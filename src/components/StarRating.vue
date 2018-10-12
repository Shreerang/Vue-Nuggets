<template>
    <div>
        <span v-for="star in stars" v-html="star"></span>
    </div>
</template>

<script>
export default {
	name: 'star-rating',
	props: {
		rating: {
			type: Number,
			default: 1,
			required: true,
		},
		baseStarsCount: {
			type: Number,
			default: 5,
		},
		iconDimensions: {
			type: Number,
			default: 20,
        },
        baseStarColor: {
            type: String,
            default: '#CCC'
        },
        ratingStarColor: {
            type: String,
            default: 'red'
        }
	},
	data() {
		return {
			ratingData: this.rating,
            stars: null,
            tooGood: this.tooGood
		};
	},
	methods: {
        toGood: function() {
            console.log('Good')
        },
        returnStar: function(color){
            return `<svg x="0px" y="0px" height="${this.iconDimensions}" width="${this.iconDimensions}" viewBox="0 0 306 306" xmlSpace="preserve">
                <g>
                    <polygon points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 94.35,187.425 58.65,299.625" fill="${color ? color : this.baseStarColor}" />
                </g>
            </svg>`
        },
        returnPartialStar: function() {
            const random = Date.now();
            const int_part = Math.trunc(this.rating);
            let float_part = Number((this.rating - int_part).toFixed(2));

            return `<svg x="0px" y="0px" height="${this.iconDimensions}" width="${this.iconDimensions}" viewBox="0 0 306 306" xmlSpace="preserve">
                <defs>
                    <linearGradient id="${'partialFill_' + random}">
                        <stop offset="0%" stop-color="${this.ratingStarColor}" />
                        <stop offset="${float_part * 100 + '%'}" stop-color="${this.ratingStarColor}" />
                        <stop offset="${float_part * 100 + '%'}" stop-color="${this.baseStarColor}" />
                        <stop offset="100%" stop-color="${this.baseStarColor}" />
                    </linearGradient>
                </defs>
                <g fill="${'url(#partialFill_' + random + ')'}">
                    <polygon points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 94.35,187.425 58.65,299.625" />
                </g>
            </svg>`
        },
		displayBaseStars: function() {
            let stars = [];
            const int_part = Math.trunc(this.rating);
            let float_part = Number((this.rating - int_part).toFixed(2));

            if(this.rating>0){
                for (let i = 0; i < this.baseStarsCount; i++) {
                    if (this.rating > 0 && i < int_part) {
                        stars.push(
                            this.returnStar(this.ratingStarColor)
                        );
                    } else if (this.rating > 0 && float_part > 0) {
                        stars.push(
                            this.returnPartialStar()
                        )
                        float_part = 0;
                    } else {
                        stars.push(
                            this.returnStar()
                        );
                    }
                }
            }

			return stars;
		},
	},
	beforeMount() {
		this.stars = this.displayBaseStars();
	},
};
</script>

<style scoped>
</style>
