<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <DayInput id="pages-start" v-model="pages.start" label="Start Page" />
      <DayInput id="pages-end" v-model="pages.end" label="End Page" />
      <DayInput id="pages-count" :value="pageCount" label="Pages Read" disabled />
    </div>
  </form>
</template>

<script>
import { computed, reactive } from '@vue/composition-api'
import DayInput from '@/components/DayInput.vue'

export default {
  components: {
    DayInput
  },

  setup () {
    const pages = reactive({
      start: 10,
      end: 30
    })

    const pageCount = computed(() => pages.end - pages.start)

    return {
      pages,
      pageCount
    }
  }
}
</script>
