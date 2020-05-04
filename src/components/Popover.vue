<template>
<div v-click-outside="hide" class="popover">
  <Button
    @click.prevent="toggle"
    :icon="icon"
    :title="title"
  />
  <div v-show="isOpen" class="popover-content">
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Popover',
  components: { Button },
  directives: { ClickOutside },
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle (evt) {
      this.isOpen = !this.isOpen
    },
    hide (evt) {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.popover {
  display: inline-flex;
  position: relative;
  z-index: 1;
}

.popover-content {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: #fff;
  padding: 1rem;
  min-width: 15rem;
  z-index: 99;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.popover-content h3 {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
