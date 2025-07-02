<script setup lang="ts">
import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function handleClick() {
  manager.toggleIsModalOpen()
}
</script>

<template>
  <button
    @click="handleClick"
    class="absolute top-2 right-2 aspect-square rounded-full bg-red-400 px-4 py-2 font-bold text-white hover:bg-red-500"
  >
    X
  </button>
</template>
