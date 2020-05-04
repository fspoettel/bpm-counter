<template>
  <ol class="outputs">
    <li v-for="output in outputs" :key="output.name">
      <Output
        :for="htmlFor"
        :name="output.name"
        :label="output.label"
        :value="`${output.value}`"
      />
    </li>
  </ol>
</template>

<script>
import Output from '@/components/Output.vue'

// @todo: This should be a functional component but Vue does not allow custom components in those? wtf
// https://github.com/vuejs/vue/issues/7492
export default {
  name: 'Outputs',
  components: { Output },
  computed: {
    outputs () {
      const { raw, rounded } = this.bpm

      return [
        {
          label: 'Taps',
          name: 'count',
          value: this.count
        },
        {
          label: 'BPM',
          name: 'bpm-out',
          value: rounded
        },
        {
          label: 'BPM (Raw)',
          name: 'bpm-out-raw',
          value: raw
        }
      ]
    }
  },
  props: {
    count: {
      type: Number,
      required: true
    },
    bpm: {
      type: Object,
      required: true
    },
    htmlFor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.outputs {
  flex: 0 0 auto;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.outputs > * {
  margin: 0;
  flex: 1 1 33.333%;
}
</style>
