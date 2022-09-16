<template>
  <nav id="page-header">
    <div class="flex items-center justify-between p-4 bg-white">
      <el-button icon="Back" text @click="router.go(-1)" />
      <span>{{ pageTitle }}</span>
      <el-button
        v-if="!!buttonType"
        :disabled="buttonDisabledFlag"
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
  buttonDisabledFlag: {
    type: Boolean,
    default: true,
  },
})
const emits = defineEmits(['emitFromPageHeader'])

const saveData = () => {
  emits('emitFromPageHeader')
}
</script>

<style lang="scss" scoped>
#page-header {
}
</style>
