<template>
  <div>
    <div class="step-challenge">
      <ChallengeSetGoal />
      <br />
      <ChallengeSetStartDate />
    </div>
  </div>
</template>

<script>
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';
import ChallengeSetStartDate from '@/components/ChallengeSetStartDate.vue';

export default {
  components: {
    ChallengeSetGoal,
    ChallengeSetStartDate,
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
