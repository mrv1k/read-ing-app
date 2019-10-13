<template>
  <div>
    <div class="step-books">
      <p>What book are you planning to read?</p>
      <BookAddNew />
    </div>
    <div class="step-challenge">
      <ChallengeSetGoal />
    </div>
    <div class="step-progress">
      <ProgressAddNew />
      <ProgressViewDay />
    </div>
  </div>
</template>

<script>
import ProgressAddNew from '@/components/ProgressAddNew.vue';
import BookAddNew from '@/components/BookAddNew.vue';
import ProgressViewDay from '@/components/ProgressViewDay.vue';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';

export default {
  components: {
    ProgressAddNew,
    BookAddNew,
    ProgressViewDay,
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
