<template>
  <div>
    <label for="set-goal">
      I commit to read
    </label>
    <input
      id="set-goal"
      v-model="goal"
      class="w-8 bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
      type="text"
      placeholder="322"
    />
    <label for="set-goal">
      pages per day
    </label>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const goal = ref(25);

    return {
      goal,
    };
  },
};
</script>
