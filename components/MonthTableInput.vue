<template>
  <td class="border">
    <input
      class="bg-white focus:outline-none focus:shadow-outline appearance-none leading-normal"
      :value="value"
      v-bind="$attrs"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    />
  </td>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    inputClass: {
      type: String,
      default: 'w-8',
    },
  },
};
</script>
