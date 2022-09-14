<template>
  <section id="initial-user-id" class="min-h-screen">
    <div class="flex justify-center min-h-screen items-center flex-col">
      <h2>아이디 입력</h2>
      <div class="p-4 w-80">
        <el-input
          v-model="initialId"
          class="mt-2"
          size="large"
          show-word-limit
          placeholder="아이디를 입력해주세요"
          clearable
          @keyup.enter="validationCheck"
        />
        <el-button
          class="w-full mt-4"
          size="large"
          type="primary"
          @click="validationCheck"
          >입력</el-button
        >
      </div>
    </div>
  </section>
  <el-dialog
    v-model="successDialog"
    title="아이디가 입력되었습니다"
    width="90%"
    top="30vh"
    center
  >
    <span class="text-center w-full inline-block">아이디가 입력되었습니다</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="submit"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog
    v-model="failDialog"
    title="아이디를 입력해주세요"
    width="90%"
    top="30vh"
    center
  >
    <span class="text-center w-full inline-block"
      >올바른 아이디를 입력해주세요</span
    ><template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="failDialog = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const failDialog = ref(false)
const successDialog = ref(false)
const initialId = ref('')
const store = useStore()
const router = useRouter()
const validationCheck = () => {
  if (initialId.value != '') successDialog.value = true
  else failDialog.value = true
}
const submit = async () => {
  await store.dispatch('emitInitialUserId', initialId.value)
  successDialog.value = false
  router.push('/path')
}
</script>

<style lang="scss" scoped>
#initial-user-id {
}
</style>
