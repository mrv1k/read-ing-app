<template>
  <div>
    <span
      >I commit to read
      <VInput id="set-goal" v-model="goal" label=""></VInput>
      pages per day
    </span>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  setup() {
    const goal = ref(0);

    return {
      goal,
    };
  },
};
</script>
