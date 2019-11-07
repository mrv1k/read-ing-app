<template>
  <div>
    <MonthTable :month="month" />
  </div>
</template>

<script>
import { setMonth } from 'date-fns';
import MonthTable from '@/components/MonthTable.vue';

const now = new Date();

export default {
  components: {
    MonthTable,
  },
  computed: {
    month() {
      return this.$route.params.month;
    },
    test() {
      return this.month ? setMonth(now, this.month) : new Date().getMonth();
    },
  },
};
</script>
