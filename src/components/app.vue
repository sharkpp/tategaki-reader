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
      <div class="no-select">
        <p>{{ title }}</p>
        <p>{{ author }}</p>
        <p>{{ chapterTitle }}</p>
        <p>{{ subTitle }}</p>
        <p v-html="contents">{{ contents }}</p>
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

/*
------ page : 1
作品名
　　　作者
------ page : 2
章名
副題

本文....
------
あたり？
*/

  export default {
    mixins: [ AjaxMixin ],
    methods: {
      testMethod: function () {
        console.log('Component Test',this)
      },
      prevPage: (e) => {
        const pageContainer = document.getElementById('page').firstChild;
        const pageContents  = pageContainer.firstChild;
        const pageWidth     = parseInt(pageContainer.clientWidth / 20) * 20;
        //
        const curOffset  = parseInt(pageContents.style.right) || 0;
        const limitOffset= 0;
        let   newOffset  = curOffset + pageWidth;
        if (limitOffset < newOffset) {
          console.log('load prev!!');
          newOffset = limitOffset;
        }
        pageContents.style.right = newOffset + 'px';
      },
      nextPage: (e) => {
        const pageContainer = document.getElementById('page').firstChild;
        const pageContents  = pageContainer.firstChild;
        const pageWidth = parseInt(pageContainer.clientWidth / 20) * 20;
        //
        const curOffset  = parseInt(pageContents.style.right) || 0;
        const limitOffset= -parseInt((pageContents.clientWidth - pageWidth) / 20) * 20; 
        let   newOffset  = curOffset - pageWidth;
        if (newOffset < limitOffset) { 
          console.log('load next!!');
          newOffset = limitOffset;
        }
        pageContents.style.right = newOffset + 'px';
      }
    },
    mounted () {
      console.log('Component ready.',this);
      this.testMethod();
      this.testMixin();
      this.getContents('n9669bk', 1);
    },
    data: () => {
      return {
        msg: 'Hello world!',
      }
    }
  }
</script>