import VueTestUtils from '@vue/test-utils';
import '@/plugins/composition-api';

// Mock Nuxt components
VueTestUtils.config.stubs['nuxt-link'] = '<a><slot /></a>';
VueTestUtils.config.stubs['no-ssr'] = '<span><slot /></span>';
