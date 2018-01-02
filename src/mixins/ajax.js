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
        testMixin: () => {
            console.log('Called!',this);
        },
    },
    mounted () {
        console.log('mixin mounted>>',this)
        Request
        .get('https://cors-anywhere.herokuapp.com/' + 'https://ncode.syosetu.com/n9669bk/1/')
        //.get('https://ncode.syosetu.com/n9669bk/1/')
        .end((err, res) => {
            console.log(err, res);
            const html        = document.createRange().createContextualFragment(res.text); // todo:取得できない場合はここでundef propエラーになる
            this.title        = html.querySelector('#container > div.contents1 > a:nth-child(1)').innerHTML;
            this.author       = html.querySelector('#container > div.contents1 > a:nth-child(2)').innerHTML;
            this.chapterTitle = html.querySelector('#container > div.contents1 > p').innerHTML;
            this.subTitle     = html.querySelector('#novel_color > p').innerHTML;
            this.contents     = html.querySelector('div.novel_view').innerHTML;
            console.log('>>', {title:this.title, author:this.author, chapterTitle:this.chapterTitle, subTitle:this.subTitle, contents:this.contents.substr(0, 64)});
        })
        console.log('mixin ready.',this)
    }
}
