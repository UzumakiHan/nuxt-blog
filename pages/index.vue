<template v-if="languagesList ||toolList ">
  <section class="prose">

    <div class="slide-enter-content">
      <h1>I Am UzumakiHan</h1>
      <h2>Languages and Frameworks</h2>
      <div class="skill-wrapper">
        <img class="rounded-5 mb-2" v-for="item in languagesList" :key="item.logo"
          :src="`https://img.shields.io/badge/${item.desc}?style=for-the-badge&logo=${item.logo}&logoColor=white`">

      </div>

      <h2>Tools and Environments</h2>
      <div class="skill-wrapper">
        <img class="rounded-5 mb-2" v-for="item in toolList" :key="item.logo"
          :src="`https://img.shields.io/badge/${item.desc}?style=for-the-badge&logo=${item.logo}&logoColor=white`">

      </div>
      <h2>Personal npm packages</h2>
      <div class="skill-wrapper" v-if="tableShow">
        <el-table :data="tableData" border style="width: 100%" >
          <el-table-column prop="name" label="name" align="center"/>
          <el-table-column label="version" width="180" align="center">
            <template #default="scope">
              <a :href="scope.row.link" target="_blank">
                <img :src="scope.row.version" alt="">
              </a>
            </template>
          </el-table-column>
          <el-table-column label="download" width="180" >
            <template #default="scope">
              <a :href="scope.row.link" target="_blank">
                <img :src="scope.row.download" alt="" >
              </a>
            </template>
          </el-table-column>
        </el-table>
      </div>


    </div>
   

  </section>
</template>

<script lang="ts" setup>

const { data: list } = useLazyAsyncData('skill', () => $fetch('/api/skill'))

const { data: npmList } = useLazyAsyncData('npm-package', () => $fetch('/api/npm-package'))

const languagesList = list.value?.data.languages
const toolList = list.value?.data.tools
const tableData = ref([])
const tableShow = ref(false)

onMounted(() => {
  tableShow.value = true
  tableData.value =tableData.value.concat(npmList.value?.data.list) 
})


// const 
</script>
  