<template>
  <div>
    <label for="set-goal">
      I commit to read
    </label>
    <input
      id="set-goal"
      :value="goal"
      class="w-8 bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
      type="text"
      placeholder="322"
      @input="handleInput"
    />
    <label for="set-goal">
      pages per day
    </label>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup(_, { root }) {
    const goal = ref(25);

    const handleInput = (event) => {
      goal.value = event.target.value;
      root.$store.commit('challenge/SET_GOAL', goal.value);
    };

    return {
      goal,
      handleInput,
    };
  },
};
</script>
