<template>
  <div>
    <div>
      {{ monthDay }}
    </div>
    <div>
      {{ calendarDate }}
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  setup() {
    const today = new Date();
    const calendarDate = format(today, 'dd MMM yyyy');
    const monthDay = format(today, 'dd');

    return {
      calendarDate,
      monthDay,
    };
  },
};
</script>
