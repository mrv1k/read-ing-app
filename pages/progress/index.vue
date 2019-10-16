<template>
  <div>
    <ProgressAddNew />
    <ProgressViewMonthTable />
  </div>
</template>

<script>
import ProgressAddNew from '@/components/ProgressAddNew.vue';
import ProgressViewMonthTable from '@/components/ProgressViewMonthTable.vue';

export default {
  components: {
    ProgressAddNew,
    ProgressViewMonthTable,
  },
};
</script>
