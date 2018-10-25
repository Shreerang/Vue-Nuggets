<template>
    <div class="nugget-container" :style="cssProps">
        <div class="nugget-grid-item" v-for="cell of cellsCount" :key="cell">{{ cell }}</div>
    </div>
</template>

<script>
export default {
    name: 'grid',
    props: {
        columns: {
            type: [Number, Object],
            default: () => ({
                xs: 2,
                sm: 2,
                md: 3,
                lg: 4
            })
        },
        cells: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            columnsCount: this.columns,
            cellsCount: this.cells
        }
    },
    computed: {
        cssProps() {
            if(Object.getOwnPropertyNames(this.columnsCount).length === 0) {
                return {
                    '--xs-columns': "repeat(" + this.columnsCount + ", 1fr)",
                    '--sm-columns': "repeat(" + this.columnsCount + ", 1fr)",
                    '--md-columns': "repeat(" + this.columnsCount + ", 1fr)",
                    '--lg-columns': "repeat(" + this.columnsCount + ", 1fr)",
                    '--default-columns': "repeat(" + this.columnsCount + ", 1fr)"
                }
            }
            return {
                '--xs-columns': "repeat(" + this.columnsCount.xs + ", 1fr)",
                '--sm-columns': "repeat(" + this.columnsCount.sm + ", 1fr)",
                '--md-columns': "repeat(" + this.columnsCount.md + ", 1fr)",
                '--lg-columns': "repeat(" + this.columnsCount.lg + ", 1fr)",
                '--default-columns': "repeat(" + this.columnsCount + ", 1fr)"
            }
        }
    }
}
</script>

<style scoped>
/* Extra large devices (large desktops)
No media query since the extra-large breakpoint has no upper bound on its width */

.nugget-container {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: var(--default-columns);
}

/* Large devices (desktops, less than 1200px) */
@media (min-width: 992px) {
    .nugget-container {
        grid-template-columns: var(--lg-columns);
    }
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
    .nugget-container {
        grid-template-columns: var(--md-columns);
    }
}

/* Small devices (landscape phones, less than 768px) */
@media all and (max-width: 767.98px) {
    .nugget-container {
        grid-template-columns: var(--sm-columns);
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media all and (max-width: 575.98px) {
    .nugget-container {
        grid-template-columns: var(--xs-columns);
    }
}

.nugget-grid-item {
    padding: 10px;
    text-align: center;
}
</style>
