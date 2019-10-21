<template>
  <div>
    <ChallengeSetGoal @SET_GOAL="recordGoal" />
    <WipTable :challenge-goal="challengeGoal" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';
import WipTable from '@/components/WipTable.vue';

export default {
  components: {
    WipTable,
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
