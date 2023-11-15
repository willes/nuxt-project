<template>
 <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body,#__nuxt{
  height: 100%;
}
#__nuxt {
  display: flex;
  flex-direction: column;
}
.flex-grow {
  flex-grow: 1;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
#nprogress .bar {
    background: #22C55E !important; 
 }
</style>
<script setup>
useHead({
  title: '我的应用',
  meta: [
    { name: 'description', content: '我的神奇网站。' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>