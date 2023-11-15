<template>
  <div
    class="jsx-d929760f56c4a829 inset-0 absolute shadow-2xl bg-black/70 bg-cover"
    id="player-wrap"
  >
    <!-- <video :src="playUrl" controls="" :poster="detail.cover"> </video> -->
  </div>
</template>
 <script setup>
import { computed, onMounted } from "vue";
// NSPlayer.debug = true
const props = defineProps({
  detail: {
    type: Object,
    default: () => ({}),
  },
  mp4s: {
    type: Array,
    default: () => [],
    required: true, // 是否必传
  },
});
if (process.client) {
  onMounted(() => {
    var quality = {
      "360p": "FD",
      "720p": "SD",
      "1080p": "HD",
      "2k": "2K",
      "4k": "4K",
    };
    var source = {};
    props.mp4s.forEach((item) => {
      var qua = quality[item.quality];
      source[qua] = item.url;
    });
    var player = new Aliplayer(
      {
        id: "player-wrap",
        source: JSON.stringify(source),
        width: "100%",
        height: "100%",
        H5Loading: "加载中...",
        cover: props.detail?.cover,
        /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
        autoplay: false,
        preload: false,
        isLive: false,
      },
      function (player) {
        console.log("The player is created");
      }
    );
  });
}
</script>
<style>
video {
  width: 100%;
  height: 100%;
}
</style>