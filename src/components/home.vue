<template>
  <div class="table-body">
    <el-radio-group v-model="tabView">
      <el-radio-button label="simple1">备选一</el-radio-button>
      <el-radio-button label="simple2">备选二</el-radio-button>
    </el-radio-group>
    <div style="margin:10px 0"></div>
    <keep-alive>
      <components v-bind:is="tabView"></components>
    </keep-alive>
    <input v-model="h"/>
    <button @click="toF">修改author</button>
    <div class="home text-center">{{home}}</div>
    <FooterDiv :logo="hello" @transferUser="getUser"></FooterDiv>
    {{user}}
    <br><br><br><br><br><br>

  </div>
</template>

<script>
  import FooterDiv from './footer'

  import Simple1 from './children/one'
  import Simple2 from './children/two'

  export default {
    name: 'home',
    data () {
      return {
        home: '别看了这里啥也没有',
        hello: 'Hello', // 父传给子
        user: '',
        h: '',
        tabView: 'simple1'
      }
    },
    methods: {
      getUser (msg) {
        this.user = msg // 子传父
      },
      toF: function () {
        // this.$store.state.author = this.h
        this.$store.commit('newAuthor', this.h)
      }
    },
    components: {
      FooterDiv,
      Simple1,
      Simple2
    }
  }
</script>

<style>
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>
