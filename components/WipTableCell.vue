<template functional>
  <td
    v-bind="data.attrs"
    class="border cursor-default bg-gray-200"
    :class="data.class"
  >
    <slot />
  </td>
</template>
