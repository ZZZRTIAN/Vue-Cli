<template>
    <footer class="footer">
        {{logo}}
        <ul>
            <li v-for="list in ul">{{list.li}}</li>
        </ul>
        <p>
            Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved
        </p>
        <section>
          <input v-model="username" @change="setUser" />
        </section>
        123:{{h}}
    </footer>
</template>

<script>
export default{
  name: 'footerDiv',
  data () {
    return {
      ul: [
        {li: '我是第一个'},
        {li: '我是第二个'},
        {li: '我是第三个'},
        {li: '我是第四个'}
      ],
      logo: ''
    }
  },
  props: ['logo'],
  methods: {
    setUser: function () {
      this.$emit('transferUser', this.username) // transferUser自定义事件
    }
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  }
}
</script>
