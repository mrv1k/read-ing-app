import { mount } from '@vue/test-utils';
import ProgressViewDay from '@/components/ProgressViewDay.vue';

describe('ProgressViewDay', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ProgressViewDay, {
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
