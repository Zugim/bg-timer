<script setup lang="ts">
import { Icon } from '@iconify/vue'

import Button from './Button.vue'

import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function closeModal() {
  manager.setModalState('closed')
}
</script>

<template>
  <Button @click="closeModal" class="absolute top-2 right-2 rounded-full p-1"
    ><Icon icon="lucide:x" :width="24"
  /></Button>
</template>
