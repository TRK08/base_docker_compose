<template>
  <div class="result">
    <a-modal
      v-model:open="isOpen"
      title="Ясный текст"
      width="100%"
      wrap-class-name="full-modal"
      @ok="closeModal"
    >
      <template #footer>
        <div class="modal-footer">
          <a-button class="modal-footer__button" key="тест" @click="closeModal"> Закрыть </a-button>
        </div>
      </template>
      <div>
        <p>
          {{ result }}
        </p>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { useResultsStore } from '@/stores/result'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const { result } = storeToRefs(useResultsStore())

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

console.log(result.value)

watch(
  result,
  () => {
    if (result.value.length > 0) {
      isOpen.value = true
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
.result {
}

.modal-footer {
  width: 100%;
  background-color: #fff;
  position: fixed;
  padding: 1rem;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
}

.full-modal {
  .ant-modal {
    max-width: 100%;
    left: 0;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
    overflow: auto;
    padding-bottom: 3rem;
  }

  .ant-modal-body {
    flex: 1;
  }
}
</style>
