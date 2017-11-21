"use struct";

import Request from 'superagent';

export default {
    data: () => {
        return {
            error: 0, //エラー状態
            loading: true, //通信状態
            result: '' //取得結果格納用
        }
    },
    methods: {
        testMixin: () => {
            console.log('Called!');
        },
    },
    mounted () {
        Request
        .get('https://cors-anywhere.herokuapp.com/' + 'https://ncode.syosetu.com/n9669bk/1/')
        //.get('https://ncode.syosetu.com/n9669bk/1/')
        .end((err, res) => {
            console.log(err, res);
            this.result = res.text;
        })
        //console.log('mixin ready.',this)
    }
}
