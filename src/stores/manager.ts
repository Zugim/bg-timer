import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useManagerStore = defineStore('manager', () => {
  const modalState = ref('closed')
  const timerState = ref('unconfigured')

  function getModalState() {
    return modalState.value
  }

  function setModalState(state: string) {
    modalState.value = state
    return modalState.value
  }

  function getTimerState() {
    return timerState.value
  }

  function setTimer(state: string) {
    timerState.value = state
    return timerState.value
  }

  return { getModalState, setModalState, getTimerState, setTimer }
})
