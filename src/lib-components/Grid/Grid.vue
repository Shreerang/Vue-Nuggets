<template>
  <div class="nugget-container" :style="cssProps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "grid",
  props: {
    columns: {
      type: [Number, Object],
      default: () => ({
        xs: 2,
        sm: 2,
        md: 3,
        lg: 4
      })
    }
  },
  computed: {
    cssProps() {
      if (Object.getOwnPropertyNames(this.columns).length === 0) {
        return {
          "--xs-columns": "repeat(" + this.columns + ", 1fr)",
          "--sm-columns": "repeat(" + this.columns + ", 1fr)",
          "--md-columns": "repeat(" + this.columns + ", 1fr)",
          "--lg-columns": "repeat(" + this.columns + ", 1fr)",
          "--default-columns": "repeat(" + this.columns + ", 1fr)"
        };
      }
      return {
        "--xs-columns": "repeat(" + this.columns.xs + ", 1fr)",
        "--sm-columns": "repeat(" + this.columns.sm + ", 1fr)",
        "--md-columns": "repeat(" + this.columns.md + ", 1fr)",
        "--lg-columns": "repeat(" + this.columns.lg + ", 1fr)",
        "--default-columns": "repeat(" + this.columns + ", 1fr)"
      };
    }
  }
};
</script>

<style scoped>
/* Extra large devices (large desktops)
No media query since the extra-large breakpoint has no upper bound on its width */

.nugget-container {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: var(--default-columns);
  overflow-x: auto;
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
</style>
