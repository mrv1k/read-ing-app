import { mount } from '@vue/test-utils';
import ProgressAddNew from '@/components/ProgressAddNew.vue';

describe('ProgressAddNew', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ProgressAddNew);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
