import { mount } from '@vue/test-utils';
import ProgressViewMonthTable from '@/components/ProgressViewMonthTable.vue';

describe('ProgressViewMonthTable', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ProgressViewMonthTable, {
      mocks: {
        $store: {
          getters: {},
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
