import { mount } from '@vue/test-utils';
import ChallengeSetGoal from '@/components/ChallengeSetGoal.vue';

function factory() {
  return mount(ChallengeSetGoal, {
    mocks: {
      $store: {
        commit: jest.fn(),
      },
    },
  });
}

describe('ChallengeSetGoal', () => {
  it('is a Vue instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has an input to set a goal', () => {
    const wrapper = factory();

    const goalInput = wrapper.find('input#set-goal');

    expect(goalInput.exists()).toBeTruthy();
  });

  // FIXME:
  it.skip('commits goal to vuex store', () => {
    const wrapper = factory();

    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith(
      'challenge/SET_GOAL',
      expect.anything(),
    );
  });
});
