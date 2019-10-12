<template>
  <div class="w-full">
    <div class="inline-flex mb-2">
      <VInput id="book-title" v-model="title" label="Book Title"></VInput>
      <VInput id="book-author" v-model="author" label="Author"></VInput>
      <VInput id="book-pages" v-model="pages" label="Page Count"></VInput>

      <div>
        <div class="invisible">spacer</div>
        <button
          class="bg-blue-500 text-white font-bold rounded py-3 px-4 whitespace-no-wrap"
          @click="addBook"
        >
          Add Book
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';

import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  setup(_, { root }) {
    const title = ref('Turning Pro');
    const author = ref('Steven Pressfield');
    const pages = ref(148);

    const addBook = () => {
      root.$store.commit('challenge/ADD_BOOK', {
        title: title.value,
        author: author.value,
        pages: pages.value,
      });

      title.value = '';
      author.value = '';
      pages.value = '';
    };

    return {
      title,
      author,
      pages,
      addBook,
    };
  },
};
</script>
