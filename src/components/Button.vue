<template functional>
  <button
    :disabled="props.disabled"
    :class="{
      'button': true,
      [`size-${props.size}`]: props.size,
      [`theme-${props.theme}`]: props.theme
    }"
    :name="props.name"
    :title="props.title"
    v-on="listeners"
    v-shortcut="props.shortcut"
  >
    <template v-if="props.icon">
      <font-awesome-icon :icon="props.icon" />
    </template>
    <template v-else>
      {{props.title}}
    </template>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    shortcut: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'm'
    },
    theme: {
      type: String,
      required: false,
      default: 'neutral'
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .button {
    -moz-appearance: none;
    appearance: none;
    background: none;
    border-radius: 0.5rem;
    border: 0;
    color: currentColor;
    font-weight: 700;
    outline: 0;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:not([disabled]) {
    cursor: pointer;
  }

  .button:not([disabled]):focus {
    outline: none;
    border: none;
    text-decoration: none;
    box-shadow: none;
  }

  .button.theme-brand {
    background: #40C0CB;
  }

  .button.theme-brand:not([disabled]):hover,
  .button.theme-brand:not([disabled]):active {
    background: #00A8C6;
  }

  .button.theme-brand:not([disabled]):active {
    border: none;
    box-shadow: inset 0 2px 0 3px rgba(0, 0, 0, 0.25);
  }

  .button.theme-brand:not([disabled]):focus {
    border: 1px dashed currentColor;
    background: #00A8C6;
  }

  .button.size-m {
    font-weight: 400;
    padding: 0.5rem 1rem;
    font-size: 1em;
  }

  .button.size-l {
    font-size: 1.125em;
    padding: 1.5rem 4.5rem;
  }

  .button.theme-neutral {
    color: currentColor;
  }

  .button.theme-neutral[disabled] {
    opacity: 0.5;
  }

  .button.theme-neutral:not([disabled]):hover,
  .button.theme-neutral:not([disabled]):active {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: none;
  }

.button.theme-neutral:not([disabled]):focus {
  background: rgba(0, 0, 0, 0.25);
}
</style>
