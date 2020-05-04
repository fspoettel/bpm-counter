<template functional>
  <div class="output">
    <label :for="props.name">{{props.label}}</label>
    <output :name="props.name" :for="props.for">
      {{props.value}}
    </output>
  </div>
</template>

<script>
export default {
  name: 'Output',
  props: {
    name: {
      type: String,
      required: true
    },
    for: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.output {
  padding: 1rem;
  text-align: center;
}

.output label {
  display: block;
  margin-bottom: 0.5rem;
}

.output output {
  display: block;
  font-weight: 700;
  font-size: 1.125em;
}
</style>
