<template>
    <el-menu class="navbar" mode="horizontal">
        <!-- 菜单显示按钮 -->
        <Hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened" ></Hamburger>
        <!-- 面包屑 -->
        <levelbar></levelbar>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="'https://wdl.wallstreetcn.com/48a3e1e0-ea2c-4a4e-9928-247645e3428b?imageView2/1/w/80/h/80'">
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link  class='inlineBlock' to="/">
                    <el-dropdown-item>
                        首页
                    </el-dropdown-item>
                </router-link>
                <router-link  class='inlineBlock' to="/admin/profile">
                    <el-dropdown-item>
                        设置
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
import Hamburger from '../../components/Hamburger'
import Levelbar from './Levelbar'

export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  computed: {
    sidebar () {
      return this.$store.getters.sidebar
    }
  },
  components: {
    Hamburger,
    Levelbar
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    },
    logout () {
        
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>
