<template>
  <div>
    <p>
      Welcome to the month of {{ monthName.full }}. There's
      {{ daysInMonth }} days in this month to get after it.
    </p>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="w-1/2 border text-left">Day</th>
          <th class="w-1/2 border text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="day in days">
          <tr
            v-if="isToday(day)"
            :key="day"
            :class="goalStatusForToday ? 'bg-green-500' : 'bg-red-500'"
          >
            <td class="w-1/2 border">{{ day }}</td>
            <td class="w-1/2 border">{{ day }} {{ monthName.short }}</td>
          </tr>

          <tr v-else :key="day">
            <td class="w-1/2 border">{{ day }}</td>
            <td class="w-1/2 border">{{ day }} {{ monthName.short }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format, getDaysInMonth } from 'date-fns';
import { initializeArrayWithPaddedRange } from '@/utils/dates';

export default {
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
    };
  },
};
</script>
