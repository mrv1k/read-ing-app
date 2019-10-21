<template>
  <div>
    <div class="step-books">
      <p>What book are you planning to read?</p>
    </div>
    <div class="step-challenge">
      <ChallengeSetGoal />
    </div>
  </div>
</template>

<script>
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';

export default {
  components: {
    ChallengeSetGoal,
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
