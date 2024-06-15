<template>
  <div class="not-found">
    <a-result status="404" title="404" sub-title="Кажется такой страницы не существует.">
      <template #extra>
        <a-button @click="router.push('/')" type="primary">Вернуться на главную</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss">
.not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
