<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="start-page">
          Start Page
        </label>
        <input
          id="start-page"
          v-model="pages.start"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="322"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          End Page
        </label>
        <input
          id="grid-zip"
          v-model="pages.end"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="322"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Pages Read
        </label>
        <input
          id="grid-zip"
          v-model="pageCount"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="322"
          disabled
        >
      </div>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from '@vue/composition-api'

export default {
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
