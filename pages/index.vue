<template>
  <div class="container">
    <DayEntry />
  </div>
</template>

<script>
import DayEntry from '@/components/DayEntry.vue'

export default {
  components: {
    DayEntry
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
