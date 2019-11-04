<template>
  <div>
    <p>
      Q: For how many days do you challenge yourself to read?
    </p>
    <p>
      <label for="set-duration">A: I commit to read for the next</label>
      <input
        id="set-duration"
        v-model.number="duration"
        class="border-2 w-8 focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="50"
      />
      <label for="set-duration">days</label>
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { SET_DURATION } from '@/store/mutation-types';

export default {
  setup() {
    const duration = ref(50);

    return { duration };
  },

  watch: {
    duration(val) {
      this.$store.commit(`challenge/${SET_DURATION}`, this.duration);
    },
  },
};
</script>
