<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <pre>{{result}}</pre>
  </div>
</template>

<script>
  import AjaxMixin from '../mixins/ajax';

  export default {
    mixins: [ AjaxMixin ],
    methods: {
      testMethod: () => {
        console.log('Component Test')
      }
    },
    mounted () {
      console.log('Component ready.')
      this.testMethod()
      this.testMixin()
    },
    data: () => {
      return {
        msg: 'Hello world!',
      }
    }
  }
</script>