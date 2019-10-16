import { mount } from '@vue/test-utils';
import ProgressViewMonthTable from '@/components/ProgressViewMonthTable.vue';

describe('ProgressViewMonthTable', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ProgressViewMonthTable, {
      computed: {
        goalStatusForToday: () => false,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
