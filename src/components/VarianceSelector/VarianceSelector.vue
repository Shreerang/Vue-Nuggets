<template>
    <div>
        <div class="nugget-variance-label">
            <strong>{{ this.labelName }}: {{ this.selectedVariance}}</strong>
        </div>
        <div>
            <div v-for="(variance, index) of this.varianceData" :key="index" @click="selectVariance(variance, index)" class="nugget-variance-shape" :class="varianceClassObject(variance, index)">
                {{ variance.value ? variance.value : variance.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'variance-selector',
	props: {
		labelName: {
			type: String,
			default: 'Type',
        },
        labelDefaultValue: {
            type: String,
            default: 'Please select one of the following'
        },
		varianceData: {
			type: Array,
		},
		shape: {
			type: String,
            default: 'square',
            validator: function (value) {
                return ['square', 'circle'].indexOf(value) !== -1
            }
		},
	},
	data() {
		return {
			selectedVariance: this.varianceData.length > 1 ? this.labelDefaultValue : this.varianceData[0].name,
			selectedVarianceIndex: this.varianceData.length > 1 ? '' : 0,
		};
	},
	methods: {
		selectVariance: function(variance, index) {
			// Deselect option (toggle)
			if (variance.name === this.selectedVariance || variance.value === this.selectedVariance) {
				this.selectedVariance = '';
				this.selectedVarianceIndex = '';
			} else {
				variance.name ? this.selectedVariance = variance.name : this.selectedVariance = variance.value;
				this.selectedVarianceIndex = index;
			}
		},
		varianceClassObject: function(variance, index) {
			return {
				'nugget-variance-circle': this.shape === 'circle',
                'nugget-variance-selected': index === this.selectedVarianceIndex,
                'nugget-variance-unavailable': variance.availability === false,
                'nugget-variance-unavailable-selected': index === this.selectedVarianceIndex && variance.availability === false,
			};
		},
	},
};
</script>

<style scoped>
.nugget-variance-shape {
	border: solid 1px #ccc;
	padding: 10px;
	min-width: 30px;
	height: 30px;
	display: inline-grid;
	margin: 5px;
	text-transform: capitalize;
	text-align: center;
	font-weight: bold;
	line-height: 30px;
    cursor: pointer;
}

.nugget-variance-square div:last-child {
	margin-right: 0;
}

.nugget-variance-circle {
	border-radius: 50%;
}

.nugget-variance-label {
	margin-bottom: 10px;
}

.nugget-variance-selected {
	border: solid 3px #000;
}

.nugget-variance-unavailable {
    background: linear-gradient(to top right, rgba(0,0,0,0) -30%, rgba(0,0,0,0) calc(50% - 1.5px), #CCC 50%, rgba(0,0,0,0) calc(50% + 1.5px), rgba(0,0,0,0) 120%);
}

.nugget-variance-unavailable-selected {
    border-color: #C00;
    background: linear-gradient(to top right, rgba(0,0,0,0) -30%, rgba(0,0,0,0) calc(50% - 1.5px), #C00 50%, rgba(0,0,0,0) calc(50% + 1.5px), rgba(0,0,0,0) 120%);
}
</style>
