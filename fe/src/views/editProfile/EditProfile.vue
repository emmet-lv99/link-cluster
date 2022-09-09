<template>
  <section id="edit-profile" v-loading="loading">
    <page-header
      page-title="프로필 수정"
      button-type="저장"
      @saveDate="saveDataToVuex"
    />
    <section>
      <div class="relative mb-16">
        <div
          class="main__body-header-cover-img w-full relative before:content-[''] before:pt-56per before:block overflow-hidden"
        >
          <img
            class="absolute top-0 left-1/2 translate-x-minus1/2 w-full h-full object-cover"
            src="../../assets/cat.jpg"
            alt=""
          />
          <el-button
            class="absolute bottom-4 right-4"
            size="large"
            icon="EditPen"
            circle
          />
        </div>
        <div
          class="absolute bottom-[-64px] left-1/2 translate-x-minus1/2 w-32 h-32"
        >
          <div class="w-full h-full overflow-hidden rounded-full">
            <img
              class="w-full h-full object-cover"
              src="../../assets/cat.jpg"
              alt=""
            />
          </div>
          <el-button
            class="absolute bottom-0 right-0"
            size="large"
            icon="EditPen"
            circle
          />
        </div>
      </div>
      <div class="p-4 pt-8">
        <div>
          <span class="text-xs">이름</span>
          <el-input
            v-model="userBasicInfo.userId"
            class="mt-2"
            size="large"
            placeholder="이름을 입력해주세요"
            clearable
          />
        </div>
        <div class="mt-12">
          <span class="text-xs">링클 링크</span>
          <el-input
            v-model="userBasicInfo.userUrl"
            class="mt-2"
            size="large"
            maxlength="20"
            show-word-limit
            placeholder="링클 링크를 입력해주세요"
            clearable
          >
            <template #prepend>linkl.io/</template>
          </el-input>
        </div>
        <div class="mt-12">
          <span class="text-xs">나의 링클 소개</span>
          <el-input
            v-model="userBasicInfo.userIntroduce"
            class="mt-2"
            resize="none"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="소개글을 입력해보세요"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import PageHeader from '../commons/PageHeader.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const loading = computed(() => store.state.loading)

const userBasicInfo = ref({
  userId: '',
  userUrl: '',
  userIntroduce: '',
})

const saveDataToVuex = () => {
  store.dispatch('emitUserBasicInfo', userBasicInfo.value)
}

store
  .dispatch('getInitialDateFromServer')
  .then(res => {
    const auth = computed(() => res)
    store.commit('checkLoading', false)
  })
  .catch(e => {
    console.log(e)
  })
</script>

<style lang="scss" scoped>
#edit-profile {
}
</style>
