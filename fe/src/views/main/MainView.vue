<template>
  <section id="main-view" class="min-h-screen">
    <header class="main__header h-20 p-4 flex justify-between bg-slate-800">
      <div class="utill-buttons__wrapper">
        <el-button class="h-full" type="info" plain>미리보기</el-button>
        <el-button class="h-full" type="info">공유하기</el-button>
      </div>
      <nav class="drawer-menu__wrapper">
        <el-button class="w-12 h-full" @click="drawer = true">
          <el-icon><Menu /></el-icon>
        </el-button>
      </nav>
    </header>
  </section>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style lang="scss" scoped></style>
