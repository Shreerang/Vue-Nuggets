<template>
  <div id="app">
    <h1>
      <img src="./assets/Vue_Nuggets.png" alt="" />
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
          <li>baseColor - Default value <strong>#666</strong></li>
          <li>fillColor - Default value <strong>#c00</strong></li>
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
        <StarRating :rating="2.4" fillColor="green" baseColor="#CCC" />
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
              <StarRating :rating="item.rating" fillColor="#42b983" baseColor="#CCC" />
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
          <li>fillColor - Default value <strong>#C00</strong></li>
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
		h31.637l6.345,145.341H34.434L42.794,49.109z" fontColor="#42b983" fillColor="#42b983" :bagCount="5" />
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
            <li>varianceData - There is no default value</li>
            <li>shape - Default value <strong>square</strong></li>
          </ol>
        </p>
        <div class="card-text">
          <h4>Default (Size Picker)</h4>
          <VarianceSelector labelName="Size" labelDefaultValue="Please select size" :varianceData="sizeSelectorData" />
        </div>
        <div class="card-text">
          <h4>Default (Color Picker)</h4>
          <VarianceSelector labelName="Size" labelDefaultValue="Please select size" :varianceData="colorSelectorData" shape="circle" />
        </div>
    </div>
  </div>
</template>

<script>
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import StarRating from './components/StarRating/StarRating';
import Grid from './components/Grid/Grid';
import GridItem from './components/Grid/GridItem';
import Alert from './components/Alert/Alert';
import BagCount from './components/BagCount/BagCount';
import VarianceSelector from './components/VarianceSelector/VarianceSelector';

export default {
	name: 'app',
	components: {
		QuantitySelector,
		StarRating,
		Grid,
		GridItem,
		Alert,
		BagCount,
		VarianceSelector,
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
				{ name: 'Blue', value: 'XS' },
				{ name: 'Light Blue', value: 'S', availability: false },
				{ name: 'Green', value: 'M', availability: false },
				{ name: 'Pink Polka Dots', value: 'L' },
				{ name: 'Magenta Red', value: 'XL' },
				{ name: 'Citrus Orange', value: 'XLL' },
			],
		};
	},
	methods: {
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
}
</style>
