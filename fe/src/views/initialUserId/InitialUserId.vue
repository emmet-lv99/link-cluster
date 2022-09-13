<template>
  <section id="initial-user-id" class="min-h-screen">
    <div class="flex justify-center h-full items-center flex-col">
      <h2>아이디 입력</h2>
      <div>
        <el-input
          class="mt-2"
          size="large"
          maxlength="20"
          show-word-limit
          placeholder="링클 링크를 입력해주세요"
          clearable
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#initial-user-id {
}
</style>
