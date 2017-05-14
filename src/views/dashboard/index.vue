<template>
    <div class="dashboard-container">
        <component v-bind:is="currentRole"> </component>
    </div>
</template>

<script>
    import DefaultDashboard from './default/index'
    export default {
      name: 'dashboard',
      components: { DefaultDashboard },
      data () {
        return {
          currentRole: 'DefaultDashboard'
        }
      },
      created () {
        if (this.roles.indexOf('admin') >= 0) {
          return
        }
        // const isEditor = this.roles.some(v => v.indexOf('editor') >= 0)
        // if (!isEditor) {
        //   this.currentRole = 'DefaultDashboard';
        // }
        this.currentRole = 'DefaultDashboard'
      }
    }
</script>
