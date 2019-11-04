<template>
  <div>
    <p>
      Q: When are you starting your challenge?
    </p>
    <p>
      <label :for="$options.id">A: I commit to read every day starting</label>
      <input
        :id="$options.id"
        v-model="value"
        class="border focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="Day"
      />
    </p>
  </div>
</template>

<script>
import { SET_START } from '@/store/mutation-types';

export default {
  data: () => ({ value: null }),

  id: 'set-start',

  watch: {
    value(value) {
      this.$store.commit(`challenge/${SET_START}`, value);
    },
  },
};
</script>
