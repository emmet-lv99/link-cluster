<template>
  <section id="initial-user-path">
    <div class="flex justify-center min-h-screen items-center flex-col">
      <h2>링클 링크 주소 입력</h2>
      <div class="p-4 w-80">
        <el-input
          v-model="initialPath"
          class="mt-2"
          size="large"
          maxlength="20"
          show-word-limit
          placeholder="주소를 입력해주세요"
          clearable
          @keyup.enter="submit"
        >
          <template #prepend>linkl.io/</template>
        </el-input>
        <span v-if="saveCheckUserUrl">유효성검사</span>
        <el-button
          class="w-full mt-4"
          size="large"
          type="primary"
          :disabled="saveCheckUserUrl"
          @click="validationCheck"
          >입력</el-button
        >
      </div>
    </div>
  </section>

  <el-dialog
    v-model="successDialog"
    title="주소가 입력되었습니다"
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
    title="주소를 입력해주세요"
    width="90%"
    top="30vh"
    center
  >
    <span class="text-center w-full inline-block"
      >올바른 주소를 입력해주세요</span
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
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const initialPath = ref('')
const validationCheckUserUrl = ref(true)
const saveCheckUserUrl = ref(false)
const failDialog = ref(false)
const successDialog = ref(false)
const store = useStore()
const router = useRouter()

watch(initialPath, (c, o) => {
  const urlRegex =
    /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/
  validationCheckUserUrl.value = !urlRegex.test(initialPath.value)
  if (
    initialPath.value != '' &&
    validationCheckUserUrl.value &&
    initialPath.value.length >= 2
  )
    saveCheckUserUrl.value = false
  else saveCheckUserUrl.value = true
})

const validationCheck = () => {
  if (!saveCheckUserUrl.value && initialPath.value != '')
    successDialog.value = true
  else failDialog.value = true
}

const submit = async () => {
  await store.dispatch('emitInitialUserPath', initialPath.value)
  successDialog.value = false
  router.push('/main')
}
</script>

<style lang="scss" scoped>
#initial-user-path {
}
</style>
