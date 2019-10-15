<template>
  <div>
    <ProgressAddNew />
    <ProgressViewDay />
  </div>
</template>

<script>
import ProgressAddNew from '@/components/ProgressAddNew.vue';
import ProgressViewDay from '@/components/ProgressViewDay.vue';

export default {
  components: {
    ProgressAddNew,
    ProgressViewDay,
  },
};
</script>
