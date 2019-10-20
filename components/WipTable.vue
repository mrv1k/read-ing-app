<template>
  <div>
    <p class="pb-6">
      How many pages per day do you challenge yourself to read this month?
      <input
        v-model="challengeGoal"
        class="border-2 w-8 focus:outline-none focus:shadow-outline appearance-none leading-normal"
      />
      pages!
    </p>
    <table class="table-auto border-collapse">
      <thead>
        <tr>
          <th class="border text-left">Day</th>
          <th class="border text-left">Date</th>
          <th class="border text-left">Start</th>
          <th class="border text-left">End</th>
          <th class="border text-left">Progress</th>
          <th class="border text-left">Book</th>
          <th class="border text-left">Pages</th>
          <th class="border text-left">Completed %</th>
        </tr>
      </thead>
      <tbody>
        <WipTableRow
          v-for="day in monthDays"
          :key="`${monthName}-${day}`"
          :day="day"
          :is-today="isToday(day)"
          :month-name="monthName"
          :challenge-goal="challengeGoal"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import { format, getDaysInMonth } from 'date-fns';

import WipTableRow from '@/components/WipTableRow.vue';
import { initializeArrayWithPaddedRange } from '@/utils/dates';

export default {
  components: {
    WipTableRow,
  },

  setup() {
    const date = new Date();
    const monthName = computed(() => format(date, 'MMM'));

    const daysInMonth = getDaysInMonth(date);
    const monthDays = computed(() =>
      initializeArrayWithPaddedRange(daysInMonth),
    );

    const today = format(date, 'dd');
    const isToday = (day) => day === today;

    const challengeGoal = ref(25);

    return {
      isToday,
      monthName,
      monthDays,

      challengeGoal,
    };
  },
};
</script>
