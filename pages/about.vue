<template>
  <div class="flex-auto">
    <section class="flex justify-center overflow-hidden sticky z-2 top-0 sm:relative sm:z-auto sm:top-auto">
      <div :style="`background-image:url(${detail?.cover});contain:strict`" class="jsx-d929760f56c4a829 bg-cover bg-center absolute inset-0 blur-xl scale-110"></div>
      <div class="h-full w-full max-h-[540px] max-w-[960px] md:mt-15">
        <div class="h-0 w-full pt-[56.25%] relative">
          <ns-player :mp4s="detail?.resource?.progressive" :detail="detail"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.18.1/skins/default/aliplayer-min.css'
    }
  ],
  script: [
    {
      src: 'https://g.alicdn.com/apsara-media-box/imp-web-player/2.18.1/aliplayer-min.js'
    }
  ]
})
const route = useRoute()
const video_library_id = route.query?.video_library_id || ''
const detail = ref({
  resource: {
    progressive: []
  }
})
async function fetchData (){
  const { data } = await useFetch(
  `/api/detail?video_library_id=${video_library_id}`
); // https://front-gateway.mtime.com/ticket/schedule/showing/movies.api?locationId=290
 detail.value =  data.value?.data
 console.log('%c [ data ]-26', 'font-size:13px; background:#a2a819; color:#e6ec5d;', data)


}
await fetchData()

useSeoMeta({
  title:detail.value.title,
  ogTitle:detail.value.title,
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>