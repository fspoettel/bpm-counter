<template>
  <form id="form">
    <div class="inputs">
      <div class="inputs-wrapper">
        <Button
          @mousedown="onMousedown"
          @touchstart="onTouchstart"
          @shortcut="handleTap"
          @click.prevent="noop"
          name="bpm-in"
          shortcut="Space"
          size="l"
          theme="brand"
          title="🥁 Tap"
        />
        <Button
          :disabled="count === 0"
          @click.prevent="onReset"
          @shortcut="onReset"
          name="bpm-reset"
          shortcut="Backspace"
          size="m"
          theme="neutral"
          title="Reset"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Button from '@/components/Button.vue'
import { beep } from '@/utils/audio'

export default {
  name: 'BpmForm',
  components: { Button },
  props: {
    count: {
      type: Number,
      required: true
    },
    shouldPlayClick: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    noop () {},
    handleTap () {
      if (this.shouldPlayClick) beep()
      this.$emit('tap')
    },
    onReset (evt) {
      this.$emit('reset')
    },
    onMousedown (evt) {
      if (!evt.defaultPrevented) {
        this.handleTap()
      }
    },
    onTouchstart (evt) {
      evt.preventDefault()
      evt.target.focus()
      this.handleTap()
    }
  }
}
</script>

<style scoped>
</style>
