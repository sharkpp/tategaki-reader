<style>
  .red {
    color: #f00;
  }
  .no-select {
    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */
  }
  .vertical {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'HGP明朝B', serif;
    -webkit-font-feature-settings: 'pkna';
            font-feature-settings: 'pkna';
    font-size: 17px;
    line-height: 1.9;
    letter-spacing: 0.03em;
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
  }
  .vertical > p {
    position: absolute;
    right: 0;
  }
  .vertical p {
    text-indent: 1em;
    margin-left: 30px;
  }
  .vertical ruby {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
  }
</style>

<template>
  <div id="page" class="vertical" v-on:click="nextPage">
    <p class="no-select">{{ result }}</p>
  </div>
</template>

<script>
  import AjaxMixin from '../mixins/ajax';

  export default {
    mixins: [ AjaxMixin ],
    methods: {
      testMethod: () => {
        console.log('Component Test')
      },
      nextPage: () => {
        const pageContainer = document.getElementById('page');
        //
        pageContainer.firstChild.style.right = (+pageContainer.firstChild.style.right - pageContainer.clientWidth) + 'px';
        console.log([pageContainer]);
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