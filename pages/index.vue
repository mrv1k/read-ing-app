<template>
  <div>
    <div class="spacer"></div>
    <div class="container">
      <ProgressAddNew />
    </div>
    <div class="container">
      <BookAddNew />
    </div>
    <div class="container">
      <ProgressViewDay />
    </div>
    <div class="container">
      <ChallengeSetGoal />
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
.spacer {
  min-height: 33vh;
}
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
