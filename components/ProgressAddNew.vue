<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <VInput
        id="pages-start"
        v-model.number="pages.start"
        label="Start Page"
      />
      <VInput id="pages-end" v-model.number="pages.end" label="End Page" />
      <VInput id="pages-count" :value="pageCount" label="Pages Read" disabled />
    </div>
  </form>
</template>

<script>
import { computed, reactive } from '@vue/composition-api';
import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  setup(_, { root }) {
    const pages = reactive({
      start: 10,
      end: 30,
    });

    const pageCount = computed(() => {
      const count = pages.end - pages.start;
      root.$store.commit('challenge/SET_PROGRESS', count);
      return count;
    });

    return {
      pages,
      pageCount,
    };
  },
};
</script>
