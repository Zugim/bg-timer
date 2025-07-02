<script setup lang="ts">
import CloseButton from './CloseButton.vue'

import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function closeModal() {
  manager.setModalState('closed')
}
</script>

<template>
  <div
    @click.self="closeModal"
    class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-red-100/40"
  >
    <section class="relative min-h-64 min-w-2xl rounded-lg bg-red-200 p-4">
      <slot />
      <CloseButton />
    </section>
  </div>
</template>
