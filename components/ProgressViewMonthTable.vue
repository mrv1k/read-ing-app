<template>
  <div>
    <p>
      Welcome to the month of {{ monthName.full }}. There's
      {{ daysInMonth }} days in this month to get after it
    </p>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="w-1/2 border text-left">Day</th>
          <th class="w-1/2 border text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days" :key="day">
          <td class="w-1/2 border">{{ day }}</td>
          <td class="w-1/2 border">{{ day }} {{ monthName.short }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format, getDaysInMonth } from 'date-fns';
import { initializeArrayWithPaddedRange } from '@/utils/dates';

export default {
  setup() {
    const today = new Date();
    const daysInMonth = getDaysInMonth(today);
    const monthName = {
      full: format(today, 'MMMM'),
      short: format(today, 'MMM'),
    };

    const days = initializeArrayWithPaddedRange(daysInMonth);

    return {
      monthName,
      daysInMonth,
      days,
    };
  },
};
</script>
