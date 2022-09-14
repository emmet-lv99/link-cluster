<template>
  <section id="initial-user-path">
    <div class="flex justify-center min-h-screen items-center flex-col">
      <h2>링클 링크 주소 입력</h2>
      <div class="p-4 w-80">
        <el-input
          v-model="initialPath"
          class="mt-2"
          size="large"
          show-word-limit
          placeholder="아이디를 입력해주세요"
          clearable
          @keyup.enter="submit"
        >
          <template #prepend>linkl.io/</template>
        </el-input>
        <el-button
          class="w-full mt-4"
          size="large"
          type="primary"
          @click="submit"
          >입력</el-button
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
#initial-user-path {
}
</style>
