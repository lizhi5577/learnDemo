<template>
  <header class="header">
    <h1 class='logo' :title="message" v-if="needReverse">{{text}}</h1>
    <!--<p>reverseText:{{ reverseText() }}</p>-->
    <!--<p>reverseText:{{ reverseText2() }}</p>-->
  </header>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        message: '页面创建于' + new Date().toLocaleString(),
        needReverse: true,
        text: 'Vue Demo by Lizhi '
      }
    },

//    compute: {
//      reverseText: function () {
//        return this.message.split('').reverse().join('')
//      }
//    },
    method: {
      reverseText2 () {
        return this.message.split('').reverse().join('')
      }
    }

  }
</script>

<style>
</style>
