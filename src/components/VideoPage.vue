<template>
  <div class="app">
    <v-card class="video" style="height:720px">
      <v-card-title> Video Lecture </v-card-title>
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
      <v-card-actions>
        <v-btn text color="deep-blue accent-4" @click="clickDashboard">
          Dashboard
        </v-btn>
        <v-btn text color="deep-blue accent-4" @click="clickKG">
          Knowledge graph
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="slide">
      <v-card-title>Key Frames</v-card-title>
       <v-virtual-scroll
        :items="items"
        height="680px"
        item-height="170px"
      >
        <template v-slot="{ item }">
          <v-list-item :key="item">
            <v-img :src="item.src"></v-img>
        </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>
<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import { get_pic_url } from "@/axios/api";

export default {
  name: "VideoPage",
  components: {
    videoPlayer,
  },
  data() {
    return {
      title: "vssue-demo",
      options: {},
      items: [],
      playerOptions: {
        width: "800px",
        height: "600px",
        language: "zh_CN",
        muted: true,
        autoplay: true,
        controls: true,
        loop: true,
        sources: [
          {
            type: "video/mp4",
            src: "/video/test.mp4",
          },
        ],
      },
    };
  },
  mounted() {
    var data = get_pic_url();
    data.then((value) => {
      this.items = value.data;
      console.log(this.items);
    });
    console.log(this.items);
    var gitalk = new Gitalk({
      clientID: "b8ecd6d58ebd58c28973",
      clientSecret: "edf0c11e2cacff8b970b451fc015ddd96f87554a",
      repo: "gitalk-demo",
      owner: "FredericaErath",
      admin: ["FredericaErath"],
      id: location.pathname, // 请确保你的 location 连接小于 50 个字符，否则，插件会生成失败
      distractionFreeMode: false, // 专注模式
    });

    gitalk.render("gitalk-container");
  },
  methods: {
    clickDashboard() {
      this.$router.push("/dashboard");
    },
    clickKG() {
      this.$router.push("/kg");
    },
  },
};
</script>
<style>
.app {
  width: 1300px;
  margin-left: 8%;
  margin-top: 5%;
  display: flex;
}
.slide {
  margin-left: 2%;
  width: 400px;
  max-height: 750px;
}
.video {
  width: 900px;
}
.group {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>