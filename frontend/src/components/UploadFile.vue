<template>
  <div class="upload-file">
    <a-upload-dragger v-model:fileList="fileList" :accept="`application/pdf, application/msword`" name="file"
      :multiple="true" :show-upload-list="false" :custom-request="sendUploadedFile" :disabled="isLoading">
      <div style="
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
        <div v-if="!isLoading">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">
            Кликните или перетащите файл для
            загрузки
          </p>
          <p class="ant-upload-hint">
            Доступные форматы файлов для загрузки:
            .pdf .docx
          </p>
        </div>
        <a-spin v-else :spinning="isLoading" />
      </div>
    </a-upload-dragger>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from "vue"
import { InboxOutlined } from "@ant-design/icons-vue"
import { useResultsStore } from "@/stores/result"
import { storeToRefs } from "pinia"

const { isLoading } = storeToRefs(
  useResultsStore()
)
const { uploadFile } = useResultsStore()
const fileList = ref([])

const sendUploadedFile = async (file: any) => {
  await uploadFile(file)
}
</script>

<style lang="scss">
.upload-file {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0 2.75rem;
}
</style>
