import { mount } from '@vue/test-utils';
import ProgressAddNew from '@/components/ProgressAddNew.vue';

function factory() {
  return mount(ProgressAddNew, {
    mocks: {
      $store: {
        commit: jest.fn(),
      },
    },
  });
}

describe('ProgressAddNew', () => {
  it('is a Vue instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should commit progress to vuex store', () => {
    const wrapper = factory();

    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith(
      'challenge/SET_PROGRESS',
      expect.anything(),
    );
  });
});
