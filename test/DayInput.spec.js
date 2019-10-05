import { mount } from '@vue/test-utils'
import DayInput from '@/components/DayInput.vue'

describe('DayInput', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DayInput)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
