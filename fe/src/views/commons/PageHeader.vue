<template>
  <nav id="page-header">
    <div class="flex items-center justify-between p-4" @click="router.go(-1)">
      <el-button icon="Back" text />
      <span>{{ pageTitle }}</span>
      <el-button v-if="!!buttonType" text>{{ buttonType }}</el-button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss" scoped>
#page-header {
}
</style>
