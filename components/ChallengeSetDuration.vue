<template>
  <div>
    <p>
      Q: For how many days do you challenge yourself to read?
    </p>
    <p>
      <label :for="$options.id">A: I commit to read for the next</label>
      <input
        :id="$options.id"
        v-model.number="value"
        class="border-2 w-8 focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="50"
      />
      <label :for="$options.id">days</label>
    </p>
  </div>
</template>

<script>
import { SET_DURATION } from '@/store/mutation-types';

export default {
  data: () => ({ value: null }),

  id: 'set-duration',

  watch: {
    value(value) {
      this.$store.commit(`challenge/${SET_DURATION}`, value);
    },
  },
};
</script>
