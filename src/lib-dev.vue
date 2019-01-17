<template>
  <div id="app">
    <h1>
      <img src="./assets/Vue_Nuggets.png" alt="" />
    </h1>
    <h1 class="default-color">
      Wishing everyone a very Happy & Prosperous New Year 2019 🎉 🎉 🎉
    </h1>
    <div class="card">
      <Alert :isActive="this.errorActive">Error Message Goes Here</Alert>
      <Alert alertType="warning" alertPosition="global" :isActive="this.warnActive" :persistFor="5">Warning Message Goes Here</Alert>
      <h1>
        Quantity Selector
      </h1>
      <p class="card-text">
        6 configirable properties
        <ol>
          <li>count - Default value <strong>1</strong></li>
          <li>maxCount - Default value <strong>6</strong></li>
          <li>isCountEditable - Default value <strong>true</strong></li>
          <li>iconDimensions - Default value <strong>15</strong></li>
          <li>minusIconFillColor - Default value <strong>#000</strong></li>
          <li>plusIconFillColor - Default value <strong>#000</strong></li>
        </ol>
      </p>
      <p class="card-text">
        Count of the component is emitted to the parent copmponent using a custom event <strong class="highlight-text">get-count</strong>
      </p>
      <div>
    </div>
      <div class="card-text">
        <h4>Default</h4>
        <QuantitySelector />
        <Alert :isActive="this.inlineErrorActive" alertPosition="inline">Error Message Goes Here</Alert>
      </div>
      <div class="card-text">
        <h4>Min count set to 4</h4>
        <QuantitySelector :count="4" />
      </div>
      <div class="card-text">
        <h4>All properties configured</h4>
        <QuantitySelector :isCountEditable=false :count="2" :maxCount="10" :iconDimensions="15" minusIconFillColor="red" plusIconFillColor="green" />
      </div>
      <div class="card-text">
        <h4>stepInterval of more than 1 is used. (Use case, selling print materials online!)</h4>
        <QuantitySelector :isCountEditable=false :count="1" :maxCount="17" :stepInterval="2" :iconDimensions="16" minusIconFillColor="red" plusIconFillColor="green" />
      </div>
      <div class="card-text">
        <h4>stepInterval of more than 1 is used. maxCount is not a multiple of stepInterval and count</h4>
        <QuantitySelector :isCountEditable=false :count="3" :maxCount="17" :stepInterval="3" :iconDimensions="16" minusIconFillColor="red" plusIconFillColor="green" />
      </div>
      <div class="card-text">
        <h4>
          Emit the quantity from component to parent component when tha parent needs to know about the selected quantity.
        </h4>
        <div class="compo-label">
          <strong class="highlight-text">Quantity: {{ this.getCountVal }}</strong>
        </div>
        <QuantitySelector @get-count="passCountVal" />
      </div>
    </div>

    <div class="card">
      <h1>
        Star Rating
      </h1>
      <p class="card-text">
        7 configirable properties
        <ol>
          <li>rating - There is no default value.</li>
          <li>totalStars - Default value <strong>5</strong></li>
          <li>iconDimensions - Default value <strong>20</strong></li>
          <li>baseColor - Default value <strong>#CCC</strong></li>
          <li>fillColor - Default value <strong>#42b983</strong></li>
          <li>noRatingMsg - Default value <strong>Be the first to review!</strong></li>
          <li>totalReviews - There is no default value.</li>
        </ol>
      </p>
      <div class="card-text">
        <h4>Default</h4>
        <StarRating :rating="0.5" />
        <Alert :isActive="this.inlineWarnActive" alertType="warning" alertPosition="inline" :persistFor="30">Warning Message Goes Here</Alert>
      </div>
      <div class="card-text">
        <h4>Default</h4>
        <StarRating :rating="3.3" totalReviews="113" />
      </div>
      <div class="card-text">
        <h4>No rating</h4>
        <StarRating />
      </div>
      <div class="card-text">
        <h4>Number of base stars id 7</h4>
        <StarRating :rating="4.7" :totalStars="7" :iconDimensions="20" :totalReviews="1029" />
      </div>
      <div class="card-text">
        <h4>fillColor is green and baseColor is #CCC</h4>
        <StarRating :rating="2.4" fillColor="#9b42b9" baseColor="#CCC" />
      </div>
    </div>

    <div class="card">
      <h1>
        Grid
      </h1>
      <p class="card-text">
        Just 1 configirable property
        <ol>
          <li>columns - Default value is an object
            <strong>
              <code>
                {
                  xs: 2,
                  sm: 2,
                  md: 3,
                  lg: 4
                }
              </code>
            </strong>, but can also take a number instead of an object.
          </li>
        </ol>
        <span style="color: red;"><strong>Note:</strong> The dashed border in the Grid items is only part of the demo!</span>
      </p>
      <div class="card-text">
        <h4>Default Grid (Can be used for building a Search/ Browse like page)</h4>
        <Grid>
          <GridItem v-for="(item, index) in gridData" :key="index" >
            <p>
              Product Name can go here!
            </p>
              <StarRating :rating="item.rating" />
            <p>
              Product Description can go here!
            </p>
          </GridItem>
        </Grid>
      </div>
      <div class="card-text">
        <h4>Grid with custom number of columns (Can be used for building a Search/ Browse like page)</h4>
        <Grid :columns="{xs: 1, sm: 2, md: 3, lg: 5}">
          <GridItem v-for="(item, index) in gridData" :key="index" >
            <p>
              Product Name can go here!
            </p>
              <StarRating :rating="item.rating" fillColor="#9b42b9" />
            <p>
              Product Description can go here!
            </p>
          </GridItem>
        </Grid>
      </div>
      <div class="card-text">
        <h4>Proucts scroll (Can be used for features like "Suggested Proucts" or "Recommended Products" or "Shop the Look")</h4>
        <Grid :columns="8">
          <GridItem v-for="(item, index) in gridData" :key="index" >
            <p>
              Product Name
            </p>
              <StarRating :rating="item.rating" fillColor="rgb(27, 149, 224)" baseColor="#CCC" />
            <p>
              Product Description
            </p>
          </GridItem>
        </Grid>
      </div>
    </div>
    <div class="card">
      <h1>
        Alert
      </h1>
      <p class="card-text">
        4 configirable property
        <ol>
          <li>alertType - Default value <strong>error</strong></li>
          <li>alertPosition - Default value <strong>global</strong></li>
          <li>isActive - Default value <strong>false</strong></li>
          <li>persistFor - There is no default value</li>
        </ol>
      </p>
      <div class="card-text">
        <h4>Default</h4>
        <p>
          In a real world use case, some sort of an action will invoke the global error or warning.<br />
          For this demo, the button click will invoke the alert!
        </p>
        <button @click="setActive">{{this.errorActive ? 'Hide Global Error' : 'Show Global Error'}}</button>
      </div>
      <div class="card-text">
        <h4>Global, page-level warning alert that persists only for 5 seconds</h4>
        <p>
          Persistance of the error message signifies the time for which the alert will be shown and then it will disappear!<br />
          The time is expected in seconds! The component will convert it to milli-seconds.
        </p>
        <button @click="setWarnActive">{{this.warnActive ? 'Hide Global Warning' : 'Show Global Warning'}}</button>
      </div>
      <div class="card-text">
        <h4>Inline field-level error alert</h4>
        <p>
          In real world scenarios, a filed level error can be shown when client-side validations are done!
        </p>
        <button @click="setInlineErrorActive">{{this.inlineErrorActive ? 'Hide Inline Error' : 'Show Inline Error'}}</button>
      </div>
      <div class="card-text">
        <h4>Inline field-level warning alert</h4>
        <p>
          In real world scenarios, a filed level warning can be shown when client-side validations are done. Warnings are usually shown and then disappear after a certain time duration.
        </p>
        <button @click="setInlineWarnActive">{{this.inlineWarnActive ? 'Hide Inline Warning' : 'Show Inline Warning'}}</button>
      </div>
    </div>
    <div class="card">
      <h1>
        Bag Count
      </h1>
      <p class="card-text">
        6 configirable properties
        <ol>
          <li>iconDimensions - Default value <strong>40</strong></li>
          <li>iconPath - Default value <strong>M177.91,55.377h-22.589v-1.368C155.311,24.25,131.091,0,101.302,0C71.503,0,47.292,24.25,47.292,54.009v1.368H24.704L11.495,202.614h179.624L177.91,55.377L177.91,55.377z M101.302,6.624c19.687,0,36.619,12.105,43.761,29.232c-9.448-14.137-25.5-23.478-43.761-23.478c-18.231,0-34.313,9.34-43.77,23.507C64.713,18.729,81.635,6.624,101.302,6.624z M57.297,55.377c4.406-20.263,22.481-35.485,44.024-35.485c21.582,0,39.618,15.222,44.024,35.485H57.297z</strong></li>
          <li>fillColor - Default value <strong>#42b983</strong></li>
          <li>fontSize - Default value <strong>80</strong></li>
          <li>fontColor - Default value <strong>#FFF</strong></li>
          <li>bagCount - There is no default value</li>
        </ol>
      </p>
      <div class="card-text">
        <h4>Default</h4>
        <BagCount :bagCount="12" />
      </div>
      <div class="card-text">
        <h4>Custom Bag Icon</h4>
        <BagCount iconPath="M166.089,42.803h-37.671V28.026C128.418,12.573,115.849,0,100.396,0S72.37,12.573,72.37,28.026
		v14.777H36.839l-9.087,157.942h145.24L166.089,42.803z M78.679,28.026c0-11.971,9.745-21.716,21.716-21.716
		c11.975,0,21.713,9.745,21.713,21.716v14.777H78.679V28.026z M42.794,49.109H72.37v14.788h6.31V49.109h43.433v14.788h6.31V49.109
		h31.637l6.345,145.341H34.434L42.794,49.109z" fontColor="#B94278" fillColor="#B94278" :bagCount="5" />
      </div>
    </div>
    <div class="card">
        <h1>
          Variance Selector
        </h1>
        <p class="card-text">
          4 configurable properties
          <ol>
            <li>labelName - Default value <strong>Type</strong></li>
            <li>labelDefaultValue - Default value <strong>Please select one of the following</strong></li>
            <li>varianceData - This is an array of objects, but there is no default value</li>
            <li>shape - Default value <strong>square</strong></li>
          </ol>
        </p>
        <p class="card-text">
          Selected value of the variance component is emitted to the parent copmponent using a custom event <strong class="highlight-text">get-selected-variant</strong>
        </p>
        <div class="card-text">
          <h4>Default (Size Picker)</h4>
          <VarianceSelector labelName="Size" labelDefaultValue="Please select a size" :varianceData="sizeSelectorData" />
        </div>
        <div class="card-text">
          <h4>Default (Color Picker)</h4>
          <VarianceSelector labelName="Color" labelDefaultValue="Please select a color" :varianceData="colorSelectorData" shape="circle" />
        </div>
        <div class="card-text">
          <h4>Default (Quantity Selector)</h4>
          <p>
            Use-case when you have a product sold in bulk, like print paper or visiting cards!
          </p>
          <VarianceSelector labelName="Quantity" labelDefaultValue="Please select quantity" :varianceData="quantitySelectorData" />
        </div>
        <div class="card-text">
          <h4>Size Picker with only ine size!</h4>
          <VarianceSelector labelName="Size" labelDefaultValue="Please select a size" :varianceData="singleSizeData" />
        </div>
        <div class="card-text">
        <h4>
          Emit the selected variant value from component to parent component when tha parent needs to know about the selected value.
        </h4>
        <div class="compo-label">
          <strong class="highlight-text">Selected Variant: {{ this.getVariantVal }}</strong>
        </div>
        <VarianceSelector labelName="Size" labelDefaultValue="Please select a size" :varianceData="sizeSelectorData" @get-selected-variant="passVariantVal" />
      </div>
    </div>
    <div class="card">
        <h1>
            Scroll To Top
        </h1>
        <p class="card-text">
            4 configirable properties
            <ol>
                <li>iconDimensions - Default value <strong>20</strong></li>
                <li>iconPath - Default value <strong>M5.906,34.998c-1.352,1.338-3.541,1.338-4.893,0c-1.35-1.338-1.352-3.506,0-4.846l19.54-19.148c1.352-1.338,3.543-1.338,4.895,0l19.539,19.148c1.352,1.34,1.352,3.506,0,4.846c-1.352,1.338-3.541,1.338-4.893,0L23,19.295L5.906,34.998z</strong></li>
                <li>iconViewBox - Default value <strong>0 0 46.001 46.001</strong></li>
                <li>fillColor - Default value <strong>#42b983</strong></li>
            </ol>
        </p>
        <div class="card-text">
            <ScrollToTop />
        </div>
    </div>
  </div>
</template>

<script>
const swatchImg = require('./assets/color_swatch.jpeg');
import { Alert, BagCount, Grid, GridItem, ScrollToTop, StarRating, VarianceSelector, QuantitySelector } from './entry';

export default {
	name: 'NuggetsLibDev',
	components: {
		QuantitySelector,
		StarRating,
		Grid,
		GridItem,
		Alert,
    BagCount,
    VarianceSelector,
    ScrollToTop
	},
	data() {
		return {
			gridData: [
				{ rating: 2.4 },
				{ rating: 3.5 },
				{ rating: 1.9 },
				{ rating: 4.4 },
				{ rating: 3.7 },
				{ rating: 2.4 },
				{ rating: 3.5 },
				{ rating: 1.9 },
			],
			errorActive: false,
			warnActive: false,
			inlineErrorActive: false,
			inlineWarnActive: false,
			sizeSelectorData: [
				{ name: 'Xtra Small', value: 'XS' },
				{ name: 'Small', value: 'S', availability: false },
				{ name: 'Medium', value: 'M', availability: false },
				{ name: 'Large', value: 'L' },
				{ name: 'Xtra Large', value: 'XL' },
				{ name: 'Double XL', value: 'XLL' },
			],
			colorSelectorData: [
				{ name: 'Black/Red', value: 'XS', image: { background: swatchImg, position: '-0px 0' } },
				{
					name: 'Black/Pink',
					value: 'S',
					availability: false,
					image: { background: swatchImg, position: '-56px 0' },
				},
				{
					name: 'Black/Tan',
					value: 'M',
					availability: false,
					image: { background: swatchImg, position: '-112px 0' },
				},
				{ name: 'Black/Tan/Purple', value: 'L', image: { background: swatchImg, position: '-168px 0' } },
				{ name: 'Magnta Multi', value: 'XL', image: { background: swatchImg, position: '-224px 0' } },
			],
			quantitySelectorData: [
				{ name: '100 Sheets', value: '100' },
				{ name: '200 Sheets', value: '200' },
				{ name: '350 Sheets', value: '350' },
				{ name: '500 Sheets', value: '500' },
			],
      singleSizeData: [{ name: 'Xtra Large', value: 'XL' }],
      getCountVal: '',
      getVariantVal: ''
		};
	},
	methods: {
    passCountVal: function(val) {
      this.getCountVal = val
    },
    passVariantVal: function(val) {
      this.getVariantVal = val
    },
		setActive: function() {
			if (this.errorActive === true) {
				this.errorActive = false;
			} else {
				this.errorActive = true;
			}
		},
		setWarnActive: function() {
			if (this.warnActive === true) {
				this.warnActive = false;
			} else {
				this.warnActive = true;
			}
		},
		setInlineErrorActive: function() {
			if (this.inlineErrorActive === true) {
				this.inlineErrorActive = false;
			} else {
				this.inlineErrorActive = true;
			}
		},
		setInlineWarnActive: function() {
			if (this.inlineWarnActive === true) {
				this.inlineWarnActive = false;
			} else {
				this.inlineWarnActive = true;
			}
		},
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 10px;
}
.card {
	border: solid 1px #ccc;
	border-radius: 5px;
	padding: 10px;
	text-align: center;
	margin: 10px;
}
.card-text {
	text-align: left;
}
img {
	width: 50%;
}
@media all and (max-width: 1000px) {
	img {
		width: 70%;
	}
}
.nugget-grid-item {
	border: dashed 1px #ccc;
}

.nugget-grid-item > .nugget-stars {
	width: 100%;
}

button {
	padding: 10px;
	border-radius: 5px;
}

strong {
	word-break: break-all;
    color: rgb(27, 149, 224);
}

.compo-label {
  margin: 10px 0;
}

h1, .highlight-text {
  color: #42b983;
}

.default-color {
  color: #000;
}
</style>
