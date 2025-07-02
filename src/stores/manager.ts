import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useManagerStore = defineStore('manager', () => {
  const isModalOpen = ref(false)
  const isTimerConfigured = ref(false)
  const isTimerRunning = ref(false)

  function toggleIsModalOpen() {
    isModalOpen.value = !isModalOpen.value
  }

  function toggleIsTimerConfigured() {
    isTimerConfigured.value = !isTimerConfigured.value
  }

  function toggleIsTimerRunning() {
    isTimerRunning.value = !isTimerRunning.value
  }

  return {
    isModalOpen,
    isTimerConfigured,
    isTimerRunning,
    toggleIsModalOpen,
    toggleIsTimerConfigured,
    toggleIsTimerRunning,
  }
})
