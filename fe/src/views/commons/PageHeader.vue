<template>
  <nav id="page-header">
    <div class="flex items-center justify-between p-4">
      <el-button icon="Back" text @click="router.go(-1)" />
      <span>{{ pageTitle }}</span>
      <el-button
        v-if="!!buttonType"
        disabled="saveStatusFlag"
        text
        @click="saveData"
        >{{ buttonType }}</el-button
      >
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
  saveStatusFlag: {
    type: Boolean,
    default: true,
  },
})
const emits = defineEmits(['saveDate'])

const saveData = () => {
  emits('saveDate')
}
</script>

<style lang="scss" scoped>
#page-header {
}
</style>
