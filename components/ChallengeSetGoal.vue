<template>
  <div>
    <p>
      Q: How many pages per day do you challenge yourself to read this month?
    </p>
    <p>
      <label for="set-goal">A: I commit to read </label>
      <input
        id="set-goal"
        v-model.number="goal"
        class="border-2 w-8 focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="322"
      />
      <label for="set-goal">pages per day </label>
    </p>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';

export default {
  setup(_, { root, emit }) {
    const goal = ref(25);

    // use watching source because vuex doesn't unwrap Ref and it bugs out with jest
    watch(goal, (goal) => {
      emit('SET_GOAL', goal);
      root.$store.commit('challenge/SET_GOAL', goal);
    });

    return {
      goal,
    };
  },
};
</script>
