import { shallowMount } from '@vue/test-utils';
import VInput from '@/components/VInput.vue';

function factory(props) {
  return shallowMount(VInput, {
    propsData: {
      id: 'id',
      label: 'label',
      value: '1',
      ...props,
    },
  });
}

describe('VInput', () => {
  describe('label', () => {
    it('should contain label', () => {
      const wrapper = factory();

      expect(wrapper.contains('label')).toBeTruthy();
    });

    it('should display label text', () => {
      const wrapper = factory({ label: 'foo' });

      expect(wrapper.find('label').text()).toBe('foo');
    });
  });

  describe('input', () => {
    it('should display given value', () => {
      const wrapper = factory({ value: 1 });

      const input = wrapper.find('input');

      // can't check v-html() "v-bind sets it as a DOM prop, not as an attribute" https://forum.vuejs.org/t/v-bind-not-working-with-attributes-in-test/19894
      expect(input.element.value).toContain('1');
    });

    it('should emit on input', () => {
      const wrapper = factory({ value: 0 });

      const input = wrapper.find('input');
      input.setValue('1');

      expect(wrapper.emitted().input[0]).toEqual(['1']);
    });
  });
});
