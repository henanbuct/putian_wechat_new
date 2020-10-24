<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './lib/hotcss/common.scss';
body{
  max-height: 999999px;
  color:white;
  margin: 0; 
}
    #app{
        width: 100%;

    }
</style>
