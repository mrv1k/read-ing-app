<template>
  <div>
    <p>
      Q: When are you starting your challenge?
    </p>
    <p>
      <label for="set-date">A: I commit to read every day starting</label>
      <input
        id="set-date"
        v-model="date"
        class="border focus:outline-none focus:shadow-outline appearance-none leading-normal"
        type="text"
        placeholder="Day"
      />
    </p>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { SET_START_DATE } from '@/store/mutation-types';

export default {
  setup(_, { root }) {
    const date = ref(new Date().toDateString());

    // use watching source because vuex doesn't unwrap Ref and it bugs out with jest
    watch(
      date,
      (date) => {
        root.$store.commit(`challenge/${SET_START_DATE}`, date);
      },
      { lazy: true },
    );

    return {
      date,
    };
  },
};
</script>
