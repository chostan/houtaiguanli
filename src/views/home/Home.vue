<template>
  <el-container class="home-container" direction="vertical">
    <home-header></home-header>
    <el-container>
      <home-aside :menu-list="menuList"></home-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from './childComps/HomeHeader';
import HomeAside from './childComps/HomeAside';
import { getMenuList } from 'network/home';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAside,
  },
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this._getMenuList();
  },
  methods: {
    // 网络请求相关方法
    async _getMenuList() {
      const res = await getMenuList();
      // console.log(res);
      this.menuList = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-main {
  background-color: #eaedf1;
}
</style>
