<template>
  <a-layout class="base-layout">
    <header class="base-layout__header">
      <div class="base-layout__logo">
        <span>🚀</span>
      </div>
      <nav class="base-layout__menu">
        <div v-for="item in menu" :key="item.path" :class="{
          active: route.path === item.path
        }">
          <span @click="router.push(item.path)">{{
            item.label
            }}</span>
        </div>
      </nav>
    </header>
    <a-layout>
      <a-layout-content class="base-layout__content">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
const route = useRoute()

const menu = [
  {
    path: "/",
    label: "Преобразование текста"
  }
  // {
  //   path: "/archive",
  //   label: "Архив документов"
  // }
]
</script>
<style lang="scss">
.base-layout {
  position: relative;
  min-height: 100vh;

  &__logo {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);

    span {
      display: block;
      font-size: 2.5rem;
    }

    @media (max-width: 512px) {
      display: none;
    }
  }

  &__header {
    position: relative;
    padding: 1.5rem 1.5rem 1rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(188, 195, 208, 0.5);

    @media (max-width: 512px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
      cursor: pointer;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.5rem;
      transition: all 0.5s ease;

      &.active,
      &:hover {
        border-bottom: 2px solid #ff0032;
      }
    }
  }

  &__content {
    background-color: #fff;
  }
}
</style>
