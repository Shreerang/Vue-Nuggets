<template>
    <div v-if="type === 'error'" class="nugget-error">
        <slot></slot>
    </div>
    <div v-else-if="type === 'warning'" class="nugget-warning">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'global-error',
    props: {
        type: {
            type: String,
            default: 'error'
        }
    }
    
}
</script>

<style scoped>
.nugget-error {
    font-size: 16px;
    padding: 10px;
    color: red;
    border: solid 1px red;
}
.nugget-warning {
    font-size: 16px;
    padding: 10px;
    color: orange;
    border: solid 1px orange;
}
</style>
