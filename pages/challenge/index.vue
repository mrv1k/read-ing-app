<template>
  <div>
    <p>Q: Is this your first reading challenge?</p>
    <span>A1: Default challenge is </span>
    <span class="pb-4 font-semibold">
      25 pages for 50 days starting right now
    </span>
    <p>
      A2: or
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        @click.prevent="toggleCustomize"
      >
        Customize
      </button>
    </p>
    <div v-if="customize">
      <ChallengeSetGoal />
      <br />
      <ChallengeSetStart />
      <br />
      <ChallengeSetDuration />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';
import ChallengeSetStart from '@/components/ChallengeSetStart.vue';
import ChallengeSetDuration from '@/components/ChallengeSetDuration.vue';

export default {
  components: {
    ChallengeSetGoal,
    ChallengeSetStart,
    ChallengeSetDuration,
  },

  setup() {
    const customize = ref(false);
    const toggleCustomize = () => (customize.value = !customize.value);

    return { customize, toggleCustomize };
  },
};
</script>
