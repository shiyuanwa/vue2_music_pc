<template>
  <div id="app" class="bg-gray-50">
    <header class="flex flex-col h-screen overflow-hidden">
      <div class="flex items-center p-2 h-20">
        <div class="w-1/5 h-full flex justify-center items-center">
          <img src="@assets/img/Logo.png" alt="logo" class="h-10">
        </div>
        <div class="w-4/5 h-auto text-right">3</div>
      </div>
      <div class="flex px-2 py-4 h-screen">
        <div class="w-1/5 px-4">
          <Menu :data="menuList" v-model='menu' @input="toRouter" />
        </div>
        <div class="w-4/5">
          <router-view />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Menu from '@components/Menu.vue';

export default {
  components: { Menu },
  data() {
    return {
      menu: 'home',
      menuList: [
        {
          title: '首页',
          value: 'home',
          src: 'svg-home',
        },
        {
          title: '排行榜',
          value: 'pm',
          src: 'svg-pm',
        },
        {
          title: '歌单',
          value: 'gd',
          src: 'svg-gd',
        },
        {
          title: 'MV',
          value: 'mv',
          src: 'svg-mv',
        },
        {
          title: '歌手',
          value: 'mx',
          src: 'svg-mx',
        },
        {
          title: '我的音乐',
          value: 'music',
          src: 'svg-music',
        },
      ],
    };
  },
  methods: {
    toRouter(name) {
      console.log(name, this.menu);
    },
  },
};
</script>
