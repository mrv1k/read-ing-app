<template>
  <div>
    <ProgressAddNew />
    <!-- <ProgressViewDay /> -->
    <ProgressViewMonthTable />
  </div>
</template>

<script>
import ProgressAddNew from '@/components/ProgressAddNew.vue';
// // import ProgressViewDay from '@/components/ProgressViewDay.vue';
import ProgressViewMonthTable from '@/components/ProgressViewMonthTable.vue';

export default {
  components: {
    ProgressAddNew,
    // ProgressViewDay,
    ProgressViewMonthTable,
  },
};
</script>
