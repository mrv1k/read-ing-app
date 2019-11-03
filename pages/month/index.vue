<template>
  <div>
    <ChallengeSetGoal @SET_GOAL="recordGoal" />
    <MonthTable :challenge-goal="challengeGoal" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';
import MonthTable from '@/components/MonthTable.vue';

export default {
  components: {
    MonthTable,
    ChallengeSetGoal,
  },
  setup() {
    const challengeGoal = ref(0);
    const recordGoal = (v) => {
      challengeGoal.value = v;
    };
    return {
      challengeGoal,
      recordGoal,
    };
  },
};
</script>
