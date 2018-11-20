<template>
  <div id="app">
    <h1>
      <img src="./assets/Vue_Nuggets.png" alt="" />
    </h1>
    <div class="card">
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
        2 configirable properties
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
      </p>
      <div class="card-text">
        <h4>Default Grid</h4>
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
    </div>
  </div>
</template>

<script>
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import StarRating from './components/StarRating/StarRating';
import Grid from './components/Grid/Grid';
import GridItem from './components/Grid/GridItem';

export default {
	name: 'app',
	components: {
		QuantitySelector,
		StarRating,
    Grid,
    GridItem,
  },
  data() {
    return {
      gridData: [{'rating': 2.4},{'rating': 3.5},{'rating': 1.9},{'rating': 4.4},{'rating': 3.7},{'rating': 2.4},{'rating': 3.5},{'rating': 1.9},]
    }
  }
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

.nugget-container {
	display: grid;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	grid-template-columns: repeat(8, 1fr);
	overflow-x: auto;
}
</style>
