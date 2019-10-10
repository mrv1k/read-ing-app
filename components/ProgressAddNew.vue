<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <VInput id="pages-start" v-model.number="start" label="Start Page" />
      <VInput id="pages-end" v-model.number="end" label="End Page" />
      <VInput id="pages-read" :value="pagesRead" label="Pages Read" disabled />
    </div>
  </form>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  setup(_, { root }) {
    const start = ref(10);
    const end = ref(30);

    const pagesRead = computed(() => {
      const pages = end.value - start.value;

      root.$store.commit('challenge/SET_PROGRESS', pages);

      return pages;
    });

    return { start, end, pagesRead };
  },
};
</script>
