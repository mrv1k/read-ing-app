<template>
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-8/12 cell text-left" v-text="headers.title"></th>
        <th class="w-3/12 cell text-left" v-text="headers.author"></th>
        <th class="w-1/12 cell text-left" v-text="headers.pages"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(book, index) in books"
        :key="book.title"
        :class="index % 2 ? 'bg-gray-100' : ''"
      >
        <td class="w-8/12 cell" v-text="book.title"></td>
        <td class="w-3/12 cell" v-text="book.author"></td>
        <td class="w-1/12 cell" v-text="book.pages"></td>
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
      return this.$store.state.books;
    },
  },
};
</script>

<style lang="postcss">
.cell {
  @apply px-4 py-2 border;
}
</style>
