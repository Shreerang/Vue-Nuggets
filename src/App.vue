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
        Global Alert
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
  </div>
</template>

<script>
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import StarRating from './components/StarRating/StarRating';
import Grid from './components/Grid/Grid';
import GridItem from './components/Grid/GridItem';
import Alert from './components/Alert/Alert';

export default {
	name: 'app',
	components: {
		QuantitySelector,
		StarRating,
		Grid,
		GridItem,
		Alert,
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
</style>
