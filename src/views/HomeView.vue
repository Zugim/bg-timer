<script setup lang="ts">
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function handleClick() {
  manager.toggleIsModalOpen()
}
</script>

<template>
  <main>
    <section v-if="!manager.isTimerConfigured">
      <h2>Setup a timer for your game</h2>
      <Button @click="handleClick">Configure</Button>
    </section>
  </main>
  <Modal v-if="manager.isModalOpen">Timer settings</Modal>
</template>
