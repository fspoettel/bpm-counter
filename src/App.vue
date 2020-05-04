<template>
  <div id="app">
    <main id="main">
      <header id="header">
        <h1>BPM Counter</h1>
        <Navigation
          @set-interval="onSetInterval"
          @toggle-click="onToggleClick"
          :shouldPlayClick="shouldPlayClick"
          :resetInterval="resetInterval"
        />
      </header>
      <BpmForm
        @tap="onTap"
        @reset="onReset"
        :count="count"
        :shouldPlayClick="shouldPlayClick"
      />
      <Outputs
        htmlFor="bpm-in"
        :count="count"
        :bpm="bpm"
      />
    </main>
  </div>
</template>

<script>
import BpmForm from '@/containers/BpmForm.vue'
import Navigation from '@/containers/Navigation.vue'
import Outputs from '@/containers/Outputs.vue'
import {
  head,
  len,
  push,
  sub,
  tail
} from '@/utils/fp'

export default {
  name: 'App',
  components: { BpmForm, Navigation, Outputs },
  data () {
    return {
      // @todo: investigate tap input delay on mobile
      shouldPlayClick: false,
      resetInterval: 3,
      taps: []
    }
  },
  computed: {
    count () {
      return len(this.taps)
    },
    bpm () {
      const { taps } = this
      const tapCount = len(taps)

      if (tapCount === 0) return { raw: 0, rounded: 0 }
      if (tapCount === 1) return { raw: 'First Beat', rounded: 'First Beat' }

      const distance = sub(tail(taps), head(taps))
      const avg = 60 / (distance / sub(tapCount, 1) / 1000)

      return { raw: avg.toFixed(2), rounded: Math.round(avg) }
    }
  },
  methods: {
    onTap (evt) {
      const { resetInterval, taps } = this

      const tapCount = len(taps)
      const now = Date.now()

      if (evt) {
        evt.target.blur()
      }

      if (tapCount === 0) {
        push(taps, now)
        return
      }

      const elapsed = now - tail(taps)

      if (elapsed >= resetInterval * 1000) {
        this.taps = [now]
      } else {
        push(taps, now)
      }
    },
    onReset (evt) {
      this.taps = []
      evt.target.blur()
    },
    onSetInterval (evt) {
      this.resetInterval = Number.parseInt(evt, 10)
    },
    onToggleClick (evt) {
      this.shouldPlayClick = evt
    }
  }
}
</script>

<style>
:root {
  font-size: 100%;
}

body {
  font-size: 1.125rem;
  margin: 0;
  background-color: #F9F2E7;
  color: #313131;
}

h1, h2, h3 {
  margin: 0;
  line-height: 1;
  font-weight: 700;
}

#app,
input,
textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
  position: relative;
}

#main {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

#header {
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
}

#header h1 {
  display: inline-block;
  padding: 1rem;
  font-size: 1.75em;
  margin-bottom: 1rem;
  background: #40C0CB;
}

#form {
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
}

.inputs {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
