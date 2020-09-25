<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isAli: false,
      isWx: false
    }
  },
  mounted () {

  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
