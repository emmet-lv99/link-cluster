<template>
  <section id="make-card" class="min-h-screen bg-purple-100">
    <page-header
      page-title="카드 유형 선택"
      button-type="닫기"
      :button-disabled-flag="false"
      @emitFromPageHeader="router.go(-1)"
    />
    <section class="p-4">
      <article class="flex w-full items-center bg-white rounded-xl">
        <div class="w-20 h-20 p-1 mr-2">
          <div class="w-full h-full bg-gray-100 rounded-xl"></div>
        </div>
        <div class="flex-1 text-center font-bold">링크 카드</div>
      </article>
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
