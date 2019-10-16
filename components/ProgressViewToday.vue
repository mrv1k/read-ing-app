<template>
  <div :class="goalStatus ? 'bg-green-500' : 'bg-red-500'">
    <div>
      {{ monthDay }}
    </div>
    <div>
      {{ calendarDate }}
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import { format } from 'date-fns';

export default {
  setup(_, { root }) {
    const today = new Date();
    const calendarDate = format(today, 'dd MMM yyyy');
    const monthDay = format(today, 'dd');

    const goalStatus = computed(
      () => root.$store.getters['challenge/goalStatus'],
    );

    return {
      calendarDate,
      monthDay,
      goalStatus,
    };
  },
};
</script>
