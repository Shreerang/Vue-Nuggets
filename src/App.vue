<template>
  <div id="app">
    <h1>
      <img src="./assets/Vue_Nuggets.png" alt="" />
    </h1>
    <div class="card">
      <StarRating :rating="2" />
      <StarRating :rating="5.5" :baseStarsCount="7" />
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
  </div>
</template>

<script>
import QuantitySelector from './components/QuantitySelector'
import StarRating from './components/StarRating'

export default {
  name: 'app',
  components: {
    QuantitySelector,
    StarRating
  }
}
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
    border: solid 1px #CCC;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
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
