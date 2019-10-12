<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <VInput id="book-title" v-model="title" label="Book Title"></VInput>
      <VInput id="book-author" v-model="author" label="Author"></VInput>
      <VInput id="book-pages" v-model="pages" label="Page Count"></VInput>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';

import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  setup() {
    const title = ref('');
    const author = ref('');
    const pages = ref('');

    return {
      title,
      author,
      pages,
    };
  },
};
</script>
