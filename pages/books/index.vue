<template>
  <div>
    <BookAddNew
      :headers="{
        title: 'Title',
        author: 'Author',
        pages: 'Pages',
      }"
    />
    <BookViewTable
      :headers="{
        title: 'Title',
        author: 'Author',
        pages: 'Pages',
      }"
    ></BookViewTable>
  </div>
</template>

<script>
import BookViewTable from '@/components/BookViewTable.vue';
import BookAddNew from '@/components/BookAddNew.vue';

export default {
  components: {
    BookViewTable,
    BookAddNew,
  },
};
</script>
