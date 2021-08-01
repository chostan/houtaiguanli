<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409EFF"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      :default-active="$route.path.split('/')[0]"
    >
      <!-- 一级菜单 -->
      <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
        <!-- 一级菜单的模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i :class="iconsObj[item.id]"></i>
          <!-- 文本 -->
          <span>{{ item.authName }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item
          :index="'/' + subItem.path"
          v-for="subItem in item.children"
          :key="subItem.id"
        >
          <!-- 二级菜单的模板区域 -->
          <template slot="title">
            <!-- 图标 -->
            <i class="el-icon-menu"></i>
            <!-- 文本 -->
            <span>{{ subItem.authName }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'HomeAside',
  props: {
    menuList: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      iconsObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao',
      },
      isCollapse: false,
    };
  },
  methods: {
    // 点击按钮，切换菜单折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  height: 24px;
  background-color: #4a5064;
  color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 21px;
  letter-spacing: 0.2em;
  cursor: pointer;
  user-select: none;
}
</style>
