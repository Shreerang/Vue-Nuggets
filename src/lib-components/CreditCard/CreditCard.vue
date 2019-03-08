<template>
    <section class="nugget-cc-container">
        <label>Card Type</label>
        <div>
            Will contain card images
        </div>
        <label for="nugget-cc-number">Card Number</label>
        <input type="number" id="nugget-cc-number">
        <label for="nugget-cc-expiry">Card Expiry (mm/yy)</label>
        <input type="number" id="nugget-cc-expiry">
        <label for="nugget-cc-cvv">CVV</label>
        <input type="number" id="nugget-cc-cvv">
        <label for="nugget-cc-cardholder">Name on Card</label>
        <input type="text" id="nugget-cc-cardholder">
    </section>    
</template>

<script>
export default {
    name: 'CreditCard'
}
</script>

<style>

</style>
