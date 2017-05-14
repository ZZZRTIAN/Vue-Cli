<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}" >
        <div class="sidebar-wrapper">
            <Sidebar class="sidebar-container"></Sidebar>
        </div>
        <div class="main-container">
            <Navbar/>
        </div>
    </div>
</template>

<script>
import {Navbar, Sidebar, AppMain} from './'

export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  // computed相当于属性的一个实时计算，如果实时计算里关联了对象，那么当对象的某个值改变的时候，同事会出发实时计算。
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;      
        position: relative;
        height: 100%;
        width: 100%;
        padding-left: 180px;
        &.hideSidebar {
            padding-left: 40px;
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                     z-index: 1001;
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            overflow-x: hidden;
            transition: all .28s ease-out;
            @include scrollBar;
        }
        .sidebar-container {
            transition: all .28s ease-out;
        }
        .main-container {
            width: 100%;
            min-height: 100%;
            transition: all .28s ease-out;
        }
    }
</style>

