<template>
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
        <th class="border text-left">Completed</th>
      </tr>
    </thead>
    <tbody>
      <WipTableRow
        v-for="thatDay in currentMonth.daysArray"
        :key="`${currentMonth.name}-${thatDay}`"
        :that-day="thatDay"
        :is-today="isToday(thatDay)"
        :month-name="currentMonth.name"
        :challenge-goal="challengeGoal"
      />
    </tbody>
  </table>
</template>

<script>
import WipTableRow from '@/components/WipTableRow.vue';
import { today, isToday, currentMonth } from '@/utils/dates';

export default {
  components: {
    WipTableRow,
  },

  props: {
    challengeGoal: {
      type: Number,
      required: true,
    },
  },

  computed: {
    currentMonth: () => currentMonth,
    today: () => today,
  },
  methods: {
    isToday,
  },
};
</script>
