import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SET_PROGRESS from '@/store/mutation-types';
import ProgressAddNew from '@/components/ProgressAddNew.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const factory = (store) => {
  return mount(ProgressAddNew, { localVue, store });
};

describe('ProgressAddNew', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        challenge: {
          namespaced: true,

          mutations: {
            [SET_PROGRESS]: jest.fn(),
          },
        },
      },
    });
  });

  it('is a Vue instance', () => {
    const wrapper = factory(store);

    console.log(wrapper.vm.$store.state.challenge);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
