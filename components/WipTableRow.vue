<template>
  <tr :class="{ 'border-t-2 border-b-2 border-gray-600': isToday }">
    <WipTableCell :class="{ 'bg-green-500': challengeIsCompleted }">
      {{ day }}
    </WipTableCell>
    <WipTableCell>{{ day }} {{ monthName }}</WipTableCell>
    <WipTableInput v-model.number="reading.start"></WipTableInput>
    <WipTableInput v-model.number="reading.end"></WipTableInput>
    <WipTableCell>{{ reading.progress }}</WipTableCell>
    <WipTableInput
      v-model.number="book.title"
      input-class="w-auto"
    ></WipTableInput>
    <WipTableInput
      v-model.number="book.pages"
      input-class="w-10"
    ></WipTableInput>
    <WipTableCell>{{ book.completion }}</WipTableCell>
  </tr>
</template>

<script>
import { computed, reactive } from '@vue/composition-api';
import { percentage } from '@/utils/helpers';
import WipTableCell from '@/components/WipTableCell.vue';
import WipTableInput from '@/components/WipTableInput.vue';

export default {
  components: {
    WipTableCell,
    WipTableInput,
  },

  props: {
    day: {
      type: String,
      required: true,
    },
    monthName: {
      type: String,
      required: true,
    },
    isToday: {
      type: Boolean,
      default: false,
    },

    challengeGoal: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const reading = reactive({
      start: 1,
      end: 26,
      progress: computed(() => reading.end - reading.start),
    });

    const book = reactive({
      title: 'DTW by Steven',
      pages: 200,
      completion: computed(() => percentage(reading.progress, book.pages)),
    });

    const challengeIsCompleted = computed(() => {
      return reading.progress >= props.challengeGoal;
    });

    return {
      reading,
      book,
      challengeIsCompleted,
    };
  },
};
</script>
