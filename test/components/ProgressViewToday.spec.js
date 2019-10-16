import { mount } from '@vue/test-utils';
import ProgressViewToday from '@/components/ProgressViewToday.vue';

describe('ProgressViewToday', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ProgressViewToday, {
      mocks: {
        $store: {
          getters: {
            'challenge/goalStatus': 0,
          },
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
