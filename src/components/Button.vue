<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>

<template>
  <button
    :class="
      twMerge(
        'rounded bg-red-400 px-4 py-2 font-bold text-white hover:bg-red-500',
        $attrs.class as string | string[] | undefined,
      )
    "
  >
    <slot />
  </button>
</template>
