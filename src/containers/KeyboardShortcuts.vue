<template>
  <dl class="shortcuts">
    <div class="shortcut">
      <dt><span class="key">Space</span></dt>
      <dd>Tap BPM</dd>
    </div>
    <div class="shortcut">
      <dt>
        <font-awesome-icon icon="backspace" />
      </dt>
      <dd>Reset</dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: 'KeyboardShortcuts'
}
</script>

<style scoped>
.shortcuts {
  margin: 0;
}

.shortcut {
  display: flex;
  flex-flow: row nowrap;
}

.shortcut:not(:last-child) {
    margin-bottom: 1rem;
}

.shortcuts dt {
  flex: 0 0 auto;
  width: 25%;
  text-align: center;
}

.shortcuts dd {
  flex: 1 1 auto;
  margin: 0;
  margin-left: 1rem;
}

.key {
  font-size: 1rem;
  background: #eee;
  padding: 0.25rem;
  border-radius: 0.25rem;
}
</style>
