<template>
  <form id="form">
    <div class="inputs">
      <div class="inputs-wrapper">
        <Button
          @mousedown="onTap"
          @click.prevent="noop"
          @shortcut="onTap"
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
    onReset (evt) {
      this.$emit('reset')
    },
    onTap (evt) {
      if (this.shouldPlayClick) beep()
      this.$emit('tap')
    }
  }
}
</script>

<style scoped>
</style>
