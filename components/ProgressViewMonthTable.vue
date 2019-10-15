<template>
  <div>
    <p>
      Welcome to the month of {{ monthName }}. There's {{ daysInMonth }} days in
      this month to get after it
    </p>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="w-1/2 border text-left">Day</th>
          <th class="w-1/2 border text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, date) in month" :key="day">
          <td class="w-1/2 border">{{ date + 1 }}</td>
          <td class="w-1/2 border">{{ day }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { readonly } from '@vue/composition-api';
import { format, getDaysInMonth, startOfMonth, addDays } from 'date-fns';

export default {
  setup() {
    const today = new Date();
    const daysInMonth = getDaysInMonth(today);
    const firstDayOfMonth = startOfMonth(today);
    const monthName = format(today, 'MMMM');

    const month = [];

    for (let i = 0; i < daysInMonth; i++) {
      const derp = addDays(firstDayOfMonth, i);
      month.push(format(derp, 'dd MMM'));
    }

    return {
      monthName,
      daysInMonth,
      month,
    };
  },
};
</script>
