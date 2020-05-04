<template>
  <nav>
    <Popover icon="cogs" title="Settings">
      <Settings
        v-on="$listeners"
        :resetInterval="resetInterval"
        :shouldPlayClick="shouldPlayClick"
      />
    </Popover>
    <Popover icon="keyboard" title="Keyboard Shortcuts">
      <KeyboardShortcuts />
    </Popover>
  </nav>
</template>

<script>
import KeyboardShortcuts from '@/containers/KeyboardShortcuts.vue'
import Popover from '@/components/Popover.vue'
import Settings from '@/containers/Settings.vue'

export default {
  name: 'Navigation',
  components: {
    KeyboardShortcuts,
    Popover,
    Settings
  },
  props: {
    resetInterval: {
      type: Number,
      required: true
    },
    shouldPlayClick: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
