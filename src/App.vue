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
        5 configirable properties
        <ol>
          <li>count - Default value <strong>1</strong></li>
          <li>maxCount - Default value <strong>6</strong></li>
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
        <QuantitySelector :count="2" :maxCount="10" :iconDimensions="15" minusIconFillColor="red" plusIconFillColor="green" />
      </div>
    </div>

    <div class="card">
      <h1>
        Star Rating
      </h1>
      <p class="card-text">
        5 configirable properties
        <ol>
          <li>rating - This property is <strong>required</strong>. There is no default value.</li>
          <li>baseStarsCount - Default value <strong>5</strong></li>
          <li>iconDimensions - Default value <strong>20</strong></li>
          <li>baseStarColor - Default value <strong>#666</strong></li>
          <li>ratingStarColor - Default value <strong>#c00</strong></li>
        </ol>
      </p>
      <div class="card-text">
        <h4>Default</h4>
        <StarRating :rating="0.5" />
      </div>
      <div class="card-text">
        <h4>Number of base stars id 7</h4>
        <StarRating :rating="4.7" :totalStars="7" />
      </div>
      <div class="card-text">
        <h4>ratingStarColor is green and baseStarColor is #CCC</h4>
        <StarRating :rating="2.4" fillColor="green" baseColor="#CCC" />
      </div>
    </div>
  </div>
</template>

<script>
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import StarRating from './components/StarRating/StarRating';

export default {
	name: 'app',
	components: {
		QuantitySelector,
		StarRating,
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
</style>
