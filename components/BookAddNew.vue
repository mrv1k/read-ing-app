<template>
  <div class="w-full">
    <div class="inline-flex mb-2">
      <VInput
        id="book-title"
        v-model="book.title"
        :label="headers.title"
      ></VInput>
      <VInput
        id="book-author"
        v-model="book.author"
        :label="headers.author"
      ></VInput>
      <VInput
        id="book-pages"
        v-model.number="book.pages"
        :label="headers.pages"
      ></VInput>

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
import { reactive } from '@vue/composition-api';

import VInput from '@/components/VInput.vue';

export default {
  components: {
    VInput,
  },

  props: {
    headers: {
      type: Object,
      required: true,
    },
  },

  setup(_, { root }) {
    const book = reactive({
      title: 'Turning Pro',
      author: 'Steven Pressfield',
      pages: 148,
    });

    const cleanInputs = () => {
      Object.keys(book).forEach((field) => {
        book[field] = '';
      });
    };
    const addBook = () => {
      const unobserv = { ...book };
      root.$store.commit('books/ADD_NEW_BOOK', unobserv);
      cleanInputs();

      if (process.env.NODE_ENV === 'development') {
        book.title = 'dev';
        book.author = 'vutya';
        book.pages = 322;
      }
    };

    return {
      book,
      addBook,
    };
  },
};
</script>
