<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    min-height: 100%;
  }
  .no-select {
    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */
  }
  #content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
  }
  .vertical {
    width: 100%;
    height: 100%;
    padding: 8px;
    position: relative;
    overflow: hidden;
    font-family: 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'HGP明朝B', serif;
    -webkit-font-feature-settings: 'pkna';
            font-feature-settings: 'pkna';
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
  }
  .vertical > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .vertical > div > p {
    position: absolute;
    right: 0;
  }
  .vertical ruby {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
  }
  #touch-area {
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
  }
  #touch-settings {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 15%;
    position: absolute;
  }
  #touch-settings + div {
    top: 15%;
    left: 0;
    right: 0;
    width: 100%;
    height: 85%;
    position: absolute;
  }
  #touch-page-next {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    position: absolute;
  }
  #touch-page-prev {
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    position: absolute;
  }
</style>

<template>
  <div id="content" >
    <div id="page" class="vertical" >
      <div>
        <p class="no-select" v-html="result">{{ result }}</p>
      </div>
    </div>
    <div id="touch-area">
      <div id="touch-settings"></div>
      <div>
        <div id="touch-page-next" v-on:click="nextPage"></div>
        <div id="touch-page-prev" v-on:click="prevPage"></div>
      </div>
    </div>
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
      prevPage: (e) => {
console.log('prevPage',e);
        const pageContainer = document.getElementById('page').firstChild;
        const pageContents  = pageContainer.firstChild;
        const pageWidth = parseInt(pageContainer.clientWidth / 20) * 20;
        //
        const curOffset = parseInt(pageContents.style.right) || 0;
        pageContents.style.right = Math.min(curOffset + pageWidth, 0) + 'px';
        console.log([pageContainer]);
      },
      nextPage: (e) => {
console.log('nextPage',e);
        const pageContainer = document.getElementById('page').firstChild;
        const pageContents  = pageContainer.firstChild;
        const pageWidth = parseInt(pageContainer.clientWidth / 20) * 20;
        //
        const curOffset = parseInt(pageContents.style.right) || 0;
        pageContents.style.right = Math.max(curOffset - pageWidth, -parseInt((pageContents.clientWidth - pageWidth) / 20) * 20) + 'px';
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