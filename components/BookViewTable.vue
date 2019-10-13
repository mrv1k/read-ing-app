<template>
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-8/12 px-4 py-2 text-left" v-text="headers.title"></th>
        <th class="w-3/12 px-4 py-2 text-left" v-text="headers.author"></th>
        <th class="w-1/12 px-4 py-2 text-left" v-text="headers.pages"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, index) in books" :key="`${book.title}-${index}`">
        <td class="w-8/12 px-4 py-2" v-text="book.title"></td>
        <td class="w-3/12 px-4 py-2" v-text="book.author"></td>
        <td class="w-1/12 px-4 py-2" v-text="book.pages"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Object,
      required: true,
    },
  },

  computed: {
    books() {
      return this.$store.state.books.list;
    },
  },
};
</script>
