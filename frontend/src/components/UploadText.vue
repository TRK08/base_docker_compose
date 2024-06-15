<template>
  <div class="upload-text">
    <a-textarea v-model:value="inputValue" placeholder="Введите свой текст" class="upload-text__input" allow-clear
      :autoSize="{
        minRows: 10,
        maxRows: 15
      }" />
    <a-button :disabled="isLoading" class="upload-text__button" type="primary" @click="sendText">Отправить</a-button>
  </div>
</template>

<script setup lang="ts">
import { useResultsStore } from "@/stores/result"
import { storeToRefs } from "pinia"
import { ref } from "vue"
const { isLoading } = storeToRefs(
  useResultsStore()
)
const { uploadText } = useResultsStore()
const inputValue = ref("")

const sendText = async () => {
  await uploadText(inputValue.value)
}
</script>
<style lang="scss">
.upload-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__button {
    width: 200px;
    display: block;
    margin-left: auto;
  }
}
</style>
