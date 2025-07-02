<script setup lang="ts">
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

import { useManagerStore } from '@/stores/manager'

const manager = useManagerStore()

function openModal() {
  manager.setModalState('configuringTimer')
}
</script>

<template>
  <main>
    <section v-if="manager.getTimerState() === 'unconfigured'">
      <h2>Setup a timer for your game</h2>
      <Button @click="openModal">Configure</Button>
    </section>
  </main>
  <Modal v-if="manager.getModalState() === 'configuringTimer'">Timer settings</Modal>
</template>
