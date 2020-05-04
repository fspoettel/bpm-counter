<template>
  <div class="settings">
    <div class="field">
      <label>
        <input
          @change="toggleClick"
          type="checkbox"
          name="play-click"
          :checked="shouldPlayClick"
        />
        <span>Play click?</span>
      </label>
    </div>
    <div class="field">
      <label>
        <span>Resets after</span>
        <input
          @change="setInterval"
          type="number"
          name="reset-interval"
          :value="resetInterval"
          min="1"
        />
        <span>seconds</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    shouldPlayClick: {
      type: Boolean,
      required: true
    },
    resetInterval: {
      type: Number,
      required: true
    }
  },
  methods: {
    setInterval (evt) {
      this.$emit('set-interval', evt.target.value)
    },
    toggleClick (evt) {
      this.$emit('toggle-click', evt.target.checked)
    }
  }
}
</script>

<style scoped>
  .field:not(:last-child) {
    margin-bottom: 1rem;
  }

  input[type="number"] {
    width: 2rem;
    margin: 0 0.5rem;
    line-height: 1;
    font-size: 1rem;
  }
</style>
