<template>
    <section class="app-main" style="min-height: 100%">
        <transition name="fade" mode="out-in">123
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
      name: 'AppMain',
      computed: {
        key () {
          return this.$route.name !== undefined
                        ? this.$route.name + +new Date()
                        : this.$route + +new Date()
        }
      }
    }
</script>
