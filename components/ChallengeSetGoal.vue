<template>
  <div>
    <p>
      Q: How many pages per day do you challenge yourself to read?
    </p>
    <p>
      <label :for="$options.id">A: I commit to read</label>
      <input
        :id="$options.id"
        v-model.number="value"
        class="border-2 w-8 focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="25"
      />
      <label :for="$options.id">pages per day</label>
    </p>
  </div>
</template>

<script>
import { SET_GOAL } from '@/store/mutation-types';

export default {
  data: () => ({ value: null }),

  id: 'set-goal',

  watch: {
    value(value) {
      this.$store.commit(`challenge/${SET_GOAL}`, value);
    },
  },
};
</script>
