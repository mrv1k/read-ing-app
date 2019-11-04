<template>
  <div>
    <div class="step-challenge">
      <ChallengeSetGoal />
      <br />
      <ChallengeSetStart />
      <br />
      <ChallengeSetDuration />
    </div>
  </div>
</template>

<script>
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';
import ChallengeSetStart from '@/components/ChallengeSetStart.vue';
import ChallengeSetDuration from '@/components/ChallengeSetDuration.vue';

export default {
  components: {
    ChallengeSetGoal,
    ChallengeSetStart,
    ChallengeSetDuration,
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
