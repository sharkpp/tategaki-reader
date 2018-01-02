"use struct";

import Request from 'superagent';

export default {
    data: () => {
        return {
            error: 0,         //エラー状態
            loading: true,    //通信状態
            title: '',        // 作品名
            author: '',       // 作者
            chapterTitle: '', // 章名
            subTitle: '',     // 副題
            contents: ''      //取得結果格納用
        }
    },
    methods: {
        testMixin: function () {
            console.log('Called!',this);
        },
        getContents: function (ncode, storyNumber) { // ※ アロー関数だと this != VueComponent になる！
            console.log(`getContents(${ncode}, ${storyNumber})`,this);
            Request
            .get('https://cors-anywhere.herokuapp.com/'
                + `https://ncode.syosetu.com/${ncode}/${storyNumber}/`)
            //.get(`https://ncode.syosetu.com/${ncode}/${storyNumber}/`)
            .end((err, res) => {
                console.log('Request end',{err:err, res:res, this:this});
                const html        = document.createRange().createContextualFragment(res.text); // todo:取得できない場合はここでundef propエラーになる
                this.title        = html.querySelector('#container > div.contents1 > a:nth-child(1)').innerHTML;
                this.author       = html.querySelector('#container > div.contents1 > a:nth-child(2)').innerHTML;
                this.chapterTitle = html.querySelector('#container > div.contents1 > p').innerHTML;
                this.subTitle     = html.querySelector('#novel_color > p').innerHTML;
                this.contents     = html.querySelector('div.novel_view').innerHTML;
                console.log(`getContents(${ncode}, ${storyNumber}) res = `, {title:this.title, author:this.author, chapterTitle:this.chapterTitle, subTitle:this.subTitle, contents:this.contents.substr(0, 64)});
            })
        },
    },
    mounted () {
        console.log('mixin ready.',this)
    }
}
