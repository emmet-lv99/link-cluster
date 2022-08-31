<template>
  <section id="main-view">
    <header class="main__header">
      <div class="utill-buttons__wrapper">
        <el-button>미리보기</el-button>
        <el-button>공유하기</el-button>
      </div>
      <nav class="drawer-menu__wrapper"></nav>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </header>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#main-view {
  min-height: 100vh;
  .main__header {
    height: 80px;
    padding: 16px;
  }
}
</style>
