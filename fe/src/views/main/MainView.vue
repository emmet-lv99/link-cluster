<template>
  <section
    id="main-view"
    v-loading="loading"
    class="min-h-screen bg-purple-100"
  >
    <header class="main__header h-20 p-4 flex justify-between bg-slate-800">
      <div class="utill-buttons__wrapper">
        <el-button
          class="h-full"
          type="info"
          plain
          @click="$router.push('preview-page')"
          >미리보기</el-button
        >
        <el-button class="h-full" type="info">공유하기</el-button>
      </div>
      <nav class="drawer-menu__wrapper">
        <el-button class="w-12 h-full" @click="drawer = true">
          <el-icon><Menu /></el-icon>
        </el-button>
      </nav>
    </header>
    <section class="main__body">
      <section class="main__body-header">
        <div
          class="main__body-header-cover-img w-full relative before:content-[''] before:pt-56per before:block before:bg-blue-500 overflow-hidden"
        >
          <img
            class="absolute top-0 left-1/2 translate-x-minus1/2 w-full h-full object-cover"
            src="../../assets/cat.jpg"
            alt="cover image"
          />
        </div>
      </section>
      <section class="main__body-main-content relative w-full">
        <div class="content-wrapper top-[-40px] absolute p-2.5 w-full">
          <div
            class="main__body-header-profile p-4 rounded-2xl bg-main-profile-bg backdrop-blur-3xl"
          >
            <div class="main__body-header-profile-data flex items-center pb-4">
              <div
                class="profile-user__image overflow-hidden w-16 h-16 rounded-full"
              >
                <img
                  class="w-full h-full object-cover"
                  src="../../assets/cat.jpg"
                  alt="프로필 이미지"
                />
              </div>
              <div class="profile-user__user-data ml-2.5">
                <div class="user-data__id font-bold">
                  {{ userBasicInfo.userId }}
                </div>
                <div class="user-data__url">
                  {{ `user.url/${userBasicInfo.userUrl}` }}
                </div>
              </div>
            </div>
            <div class="main__body-header-profile-edits flex">
              <el-button class="flex-1" @click="$router.push('edit-profile')"
                >프로필 수정</el-button
              >
              <el-button class="flex-1">디자인 선택</el-button>
            </div>
          </div>
          <div class="main-content__link-items-wrapper">
            <div
              class="link-items__nothing bg-white mt-4 rounded-xl text-center p-4"
            >
              <p>새 카드를 추가해보세요.</p>
              <el-button
                class="w-full mt-4"
                size="large"
                icon="Files"
                round
                @click="$router.push('make-card')"
                >카드 추가</el-button
              >
            </div>
            <div class="link-items__sns-nothing text-center mt-4">
              <el-button
                round
                icon="Cpu"
                size="large"
                @click="$router.push('add-sns')"
                >SNS 추가</el-button
              >
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const userBasicInfo = ref({
  userId: '',
  userUrl: '',
  userIntroduce: '',
})

const store = useStore()

const loading = computed(() => store.state.loading)

store
  .dispatch('getInitialDateFromServer')
  .then(res => {
    userBasicInfo.value = res.userBasicInfo
    store.commit('checkLoading', false)
  })
  .catch(e => {
    console.log(e)
  })

const drawer = ref(false)
</script>

<style lang="scss" scoped></style>
