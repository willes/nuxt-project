<template>
    <div class="h-full flex overflow-hidden flex-col">
     <div class="flex-1 overflow-hidden">
       <el-scrollbar native view-style="padding: 12px">
         <el-row :gutter="20">
           <el-col
             v-for="item in movieList"
             :key="item.id"
             :xs="12"
             :sm="8"
             :md="6"
             :lg="4"
             :xl="4"
           >
             <el-card :body-style="{ padding: '0px' }" class="mb-3">
               <NuxtLink
                 :to="`\about?video_library_id=${item.video_library_id}`"
                 target="_blank"
                 class="pic-item"
               >
                 <el-image :src="item.cover" lazy class="image" />
               </NuxtLink>
               <div class="min-h-[96px]">
                 <div class="px-3 mb-2 pt-2.5 text-sm font-semibold text-gray-800">
                   <h2 class="truncate block">{{ item.title }}</h2>
                 </div>
                 <div class="px-3 text-xs h-4.5 text-gray-400">
                   <div class="flex items-center h-4.5">
                     <div class="flex items-center truncate">
                       <div class="truncate">{{ categories(item.categories) }}</div>
                     </div>
                   </div>
                 </div>
                 <div class="pt-1.5 pb-2.5 px-3">
                   <div class="flex justify-between items-center h-6">
                     <div class="flex-1 text-xs flex items-center space-x-1">
                       <el-avatar
                         shape="circle"
                         :size="20"
                         :src="item.author?.userinfo?.avatar"
                         alt=""
                       />
                       <span class="max-w-[100px] flex-none truncate text-gray-800">
                         {{ item.author?.userinfo?.username }}</span
                       >
                     </div>
                   </div>
                 </div>
               </div>
             </el-card>
           </el-col>
         </el-row>
       </el-scrollbar>
     </div>
     <div class="p-2 flex justify-center">
     <UPagination v-model="page" size="lg" :page-count="articleData.per_page" :total="articleData.total" />{{ page }}
     </div>
    </div>
 </template>
 <script setup lang="ts">
 import { ref, onMounted } from "vue"
 import { ElMessage } from "element-plus";
 const route = useRoute()
 const pageId = route.params?.id + ''
 const movieList = ref([]);
 const articleData = ref({
   per_page: 0,
   total: 0
 })
 const page = ref(+(pageId?.match?.(/pp(\d+)/)?.[1]) || 1)
 const pageIndexPrex = '76-0'
 async function fetchData() {
   const paramId = pageId === '1' ? pageIndexPrex :  pageId
   const { data, error } = await useFetch("/api/article", {
     query: {
       param: paramId
     }
   });
   
   if (error.value) {
     ElMessage.error("接口出错啦!");
   } else {
     const { discoverArticleData } = data?.value?.pageProps || {};
     movieList.value = discoverArticleData?.list || [];
     articleData.value = discoverArticleData
   }
   
 }

 watch(page, (newVal) => {
    const id = newVal === 1 ? pageIndexPrex :  `${pageIndexPrex}-all-all-0-0-score-pp${newVal}`
   navigateTo({
     path: '/article/'+id
   })
 })
 const categories = (categories) => {
   var category_names = [];
   for (var i = 0; i < categories.length; i++) {
     const item = categories[i];
     var category_name = item.category_name + "-" + item.sub.category_name;
     category_names.push(category_name);
   }
   return category_names.join(" | ");
 };
 await fetchData();
 </script>
 
 
 <style lang="less" scoped>
 .time {
   font-size: 12px;
   color: #999;
 }
 
 .bottom {
   margin-top: 13px;
   line-height: 12px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 
 .button {
   padding: 0;
   min-height: auto;
 }
 .pic-item {
   position: relative;
   &:before {
     content: "";
     width: 1px;
     margin-left: -1px;
     float: left;
     height: 0px;
     padding-top: 56.25%;
     pointer-events: none;
   }
   &::after {
     content: "";
     display: table;
     clear: both;
   }
 }
 .image {
   position: absolute;
   height: 100%;
   width: 100%;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   object-fit: cover;
 }
 </style>
 