const ap = new APlayer({
    container: document.getElementById('player'),   //播放器HTML容器元素
    fixed: true,    //吸底模式
    autoplay: true,    //自动播放开关（Chromium现已禁止自动播放）
    //theme: '#FADFA3',   //主题色
    loop: 'all',        //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list',    //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto',    //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.5,        //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true,        //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false,  //列表默认折叠
    listMaxHeight: 90,  //列表最大高度
    //lrcType: 3,         //歌词传递方式
    audio: [            ////音频信息,包含以下
        {
            name: '青春コンプレックス',          //音频名称
            artist: '結束バンド',      //音频艺术家
            url: 'https://dl.stream.qqmusic.qq.com/C400002l2olz0rL0qW.m4a?guid=1407994956&vkey=5D0954CD48777F1E1FCB19D130905378E057EC7B01C428FE335B23D65091DCB1A8C21CD357D869A1FDF79AA0AE4E09D14C2DCF680D78F5C3&uin=1446457778&fromtag=120032',        //音频外链
            cover: '//y.qq.com/music/photo_new/T002R300x300M0000011oG6M1EZ3K0_1.jpg',    //音频封面
            lrc: '',        //音频歌词，配合上面的lrcType使用
            theme: ''        //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {       //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            name: '',
            artist: '',
            url: '',
            cover: '',
            lrc: '',
            theme: ''
        }
    ]
});