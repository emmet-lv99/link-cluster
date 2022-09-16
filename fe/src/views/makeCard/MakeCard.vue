<template>
  <section id="make-card" class="min-h-screen bg-purple-100">
    <page-header
      page-title="카드 유형 선택"
      button-type="닫기"
      :button-disabled-flag="false"
      @emitFromPageHeader="router.go(-1)"
    />
    <section class="p-4">
      <article class="w-full"></article>
    </section>
  </section>
</template>

<script setup>
import PageHeader from '../commons/PageHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
#make-card {
}
</style>
