/* eslint-disable no-console */
import VueTestUtils from '@vue/test-utils';
import '@/plugins/composition-api';

// Mock Nuxt components
VueTestUtils.config.stubs['nuxt-link'] = '<a><slot /></a>';
VueTestUtils.config.stubs['no-ssr'] = '<span><slot /></span>';

/**
 * Console handlers
 */
// const error = console.error;
// console.error = function(message) {
//   // Reminder: display only first line in VSCode Jest Extension
//   error.apply(console, arguments);
//   // NOTE: You can whitelist some `console.error` messages here
//   // by returning if the `message` value is acceptable.
//   throw message instanceof Error ? message : new Error(message);
// };

// const warn = console.warn;
// console.warn = function(message) {
//   // Reminder: display only first line in VSCode Jest Extension
//   warn.apply(console, arguments);
//   throw message instanceof Error ? message : new Error(message);
// };
