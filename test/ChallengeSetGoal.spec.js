import { mount } from '@vue/test-utils';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';

describe('ChallengeSetGoal', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ChallengeSetGoal);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has an input to set a goal', () => {
    const wrapper = mount(ChallengeSetGoal);
    const goalInput = wrapper.find('input#set-goal');
    expect(goalInput.exists()).toBeTruthy();
  });
});
