<template>
  <div>
    <p>
      Welcome to the month of {{ monthName.full }}. There's
      {{ daysInMonth }} days in this month to get after it.
    </p>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="border text-left">Day</th>
          <th class="border text-left">Date</th>
          <th class="border text-left">Start</th>
          <th class="border text-left">End</th>
          <th class="border text-left">Read</th>
          <th class="border text-left">Book</th>
          <th class="border text-left">Book Pages</th>
          <th class="border text-left">Read %</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="goalStatusForToday ? 'bg-green-500' : 'bg-red-500'">
          <td class="border">{{ todayMonthNumber }}</td>
          <td class="border">{{ todayMonthNumber }} {{ monthName.short }}</td>
          <td class="border text-left">Start</td>
          <td class="border text-left">End</td>
          <td class="border text-left">Read</td>
          <td class="border text-left">Book</td>
          <td class="border text-left">Book Pages</td>
          <td class="border text-left">Read %</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format, getDaysInMonth } from 'date-fns';

// import ProgressAddNew from '@/components/ProgressAddNew.vue';
import { initializeArrayWithPaddedRange } from '@/utils/helpers';

export default {
  components: {
    // ProgressAddNew,
  },
  computed: {
    goalStatusForToday() {
      return this.$store.getters['challenge/goalStatusForToday'];
    },
  },

  setup() {
    const today = new Date();
    const daysInMonth = getDaysInMonth(today);
    const monthName = {
      full: format(today, 'MMMM'),
      short: format(today, 'MMM'),
    };
    const todayMonthNumber = format(today, 'dd');
    const isToday = (day) => day === todayMonthNumber;

    const days = initializeArrayWithPaddedRange(daysInMonth);

    return {
      monthName,
      daysInMonth,
      days,
      isToday,

      todayMonthNumber,
    };
  },
};
</script>
