<template>
    <div v-if="alertType === 'error' && isActiveData" class="nugget-error" id="nugget-error">
        <slot></slot>
    </div>
    <div v-else-if="alertType === 'warning' && isActiveData" class="nugget-warning" id="nugget-warning">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'global-alert',
	props: {
		alertType: {
			type: String,
			default: 'error',
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		persistFor: {
			type: Number,
		},
	},
	data() {
		return {
			isActiveDataVal: this.isActive,
		};
	},
	computed: {
		isActiveData: {
			get: function() {
				return this.isActiveDataVal;
			},
			set: function(val) {
				this.isActiveDataVal = val;
			},
		},
	},
	watch: {
		isActive: function() {
			this.isActiveDataVal = this.isActive;
		},
		isActiveData: function() {
			if (this.isActiveData) {
				const getElm = this.alertType === 'error' ? 'nugget-error' : 'nugget-warning';
				var checkElm = setInterval(function() {
					if (document.getElementsByClassName(getElm)[0]) {
						const elm = document.getElementsByClassName(getElm)[0];
						elm.scrollIntoView();
						clearInterval(checkElm);
					}
				}, 100);
			}
			if (this.persistFor > 0) {
				setTimeout(
					function() {
						this.isActiveData = false;
					}.bind(this),
					this.persistFor * 1000
				);
			}
		},
	},
};
</script>

<style scoped>
.nugget-error {
	font-size: 16px;
	padding: 10px;
	margin: 10px 0;
	color: red;
	border: solid 1px red;
}
.nugget-warning {
	font-size: 16px;
	padding: 10px;
	margin: 10px 0;
	color: orange;
	border: solid 1px orange;
}
</style>
