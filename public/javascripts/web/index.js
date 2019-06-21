var app = new Vue({
    el:"#app",
    data () {
        return {
            video:"",
            year:"",
            isSafiri:false,
            isShowShade:false,
            loop1:0,
            loop2:0,
            caseList:[
                    {link:"/app/works?id=1",img:"",txt:"创意短视频"},
                    {link:"/app/works?id=2",img:"",txt:"企业产品"},
                    {link:"/app/works?id=3",img:"",txt:"影视广告"},
                    {link:"/app/about",img:"",txt:"ABOUT ME"}
                ],
            // course:[
            //     {time:'2015',text:"杭州思影奇数字科技有限公司正式成立（承接定制三维产品动画，与澜山地产合作，推出二三维地产动画《澜山》；与农海湖城市花园合作）"},
            //     {time:'2016',text:"虚拟影像互动展示"},
            //     {time:'2017',text:"虚拟影像互动展示虚拟影像互动展示虚拟影像互动展示虚拟影像互动展示"},
            //     {time:'2018',text:"虚拟影像互动展示虚拟影像互动展示虚拟影像互动展示"},
            //     {time:'未来',text:"虚拟影像互动展示虚拟影像互动展示"}
            // ],
            course:"",
            works:[
                    {link:"/",txt:"全部"},
                    {link:"/",txt:"三维产品动画"},
                    {link:"/",txt:"影视广告TVC"},
                    {link:"/",txt:"地产创意工厂"}
                ],
            workH:0,
            worksList:[],
            newsList:[],
            client:[{img:""}],
        }
    },
    mounted(){
        // she init
        this.handleInit();
        // set year 设置年份
        let time = new Date();
        this.year = time.getFullYear();
        // 第一个参数 全部请求完成后执行的事件  第二个及以后的（请求的事件）
        this.bindAllAjAX(()=>{
            this.bindImgSuccess((l,arr)=>{
                if(l == arr.length){
                    $(".loding-bar span").css("width",`100%`);
                    $(".loding").hide()
                    $(".loding-bar").hide()
                }else{
                    let __ = Math.ceil(arr.length/l*100);
                    $(".loding-bar span").css("width",`${__}%`);
                }

                let workH = $(".works-list a").height();
                this.workH = workH;
            })
        },this.bindGetWorkList(),this.bindGetNewsList())
    },
    methods:{
        // 获取首页设置
        handleInit(){
            $.ajax({
                url:"/app/index",
                type:"GET",
                success:(res)=>{
                    let data = JSON.parse(res.data[0].cont);
                    let list = this.caseList,arr = data.workCover;
                    for(let i in list){
                        list[i].img = arr[i].url;
                    }
                    this.caseList = list;
                    this.video = data.video;
                    this.course = data.course;
                    this.bindSetLogo(data.logos);
                }
            })
        },
        // video show 视频遮罩
        handleShowVideo(){
            this.isShowShade = this.isShowShade?false:true;
        },
        // logo loop 企业logo轮播
        _loop(db,L,type){
            if(L > $("body").width()){
                var _x = type === "left"? -(this.loop1++):this.loop2++;
                $(db).css("transform",'matrix(1, 0, 0, 1, '+ _x +', 0)');
                if(type === "left"){
                    if(L/2 == Math.abs(this.loop1)){
                        this.loop1 = 0;
                    }
                }else{
                    if(L/2 == Math.abs(this.loop2)){
                        this.loop2 = 0;
                    }
                }
                setTimeout(() => {
                    this._loop(db,L,type)
                }, 30);
            }else{
                
            }
        },
        /**
         * 获取作品列表
         */
        async bindGetWorkList(){
            return new Promise((resolve,reject)=>{
                $.ajax({
                    url: "/app/project/list",
                    type: "GET",
                    success: (res) => {
                        let db = res.data.sort((a,b)=>{
                            return new Date(a.createtime) < new Date(b.createtime)?1:-1;
                        })
                        let H = document.querySelector(".works").clientWidth / 3 * .5625 * 2;
                        let _filter = [],filter = [], sort = [], arr = [];
                        for(let i in db){
                            if(db[i].type == 1){
                                _filter.push(db[i])
                            }
                        }
                        filter = _filter.slice(0,21);
                        sort = filter.sort((x,y)=>{
                            if(x.sort > y.sort){
                                return 1;
                            }else if(x.sort < y.sort){
                                return -1;
                            }else{
                                return 0;
                            }
                        })
                        for(let i in sort){
                            let ind = Math.floor(i / 7);
                            if(!arr[ind]){
                                arr[ind] = []
                            }
                            arr[ind].push(sort[i])
                        }
                        for(let i in arr){
                            let _arr = arr[i];
                            for(let j in _arr){
                                let num = j % 7;
                                let cla = "";
                                if(num == 0 || num == 2 || num == 4){
                                    cla = "active1";
                                }else if(num == 1 || num == 3){
                                    cla = "active2";
                                }
                                if(num == 3 || num == 5){
                                    _arr[j].h = H + 'px';
                                }else{
                                    _arr[j].h = H/2 + 'px';
                                }
                                _arr[j].cla = cla;
                            }
                        }
                        this.worksList = arr;
                        if(res.code != 200){
                            reject(res)
                        }else{
                            resolve(res)
                        }
                    }
                })
            })
        },
        /**
         * 获取新闻列表
         */
        async bindGetNewsList(){
            return new Promise((resolve,reject)=>{ 
                $.ajax({
                    url: "/app/informa/list",
                    type: "GET",
                    success: (res) => {
                        this.newsList = res.data.slice(0,3);
                        if(res.code != 200){
                            reject(res)
                        }else{
                            resolve(res)
                        }
                    }
                })
            })
        },
        /**
         * promise 整合ajax加载
         * fn 请求完成后执行的函数
         * obj 需要执行ajax的集合
         */
        async bindAllAjAX(fn,...obj){
            // 等待所有ajax执行完毕
            await Promise.all(obj).then((res)=>{fn?fn():'';})
            
        },
        /**
         * 判断图片是否加载完成
         * fn 图片全部加载完成后执行的函数
         * obj 图片所在的元素的位子
         */
        bindImgSuccess(fn,obj = document){
            let el = obj.querySelectorAll("img"),l = el.length,arr = [];
            for(let i of [...el]){
                let time = setInterval(()=>{
                    if(i.complete){
                        arr.push(1);
                        fn(l,arr);
                        clearInterval(time)
                    }
                    if(l == arr){
                        fn(l,arr);
                    }
                },100)
            }
        },
        /**
         * 设置logo
         * fn 图片全部加载完成后执行的函数
         * obj 图片所在的元素的位子
         */
        bindSetLogo(db){
            let arr = [...db,...db];
            let _arr  = [];
            for(let i in arr){
                _arr.push({img:arr[i]})
            }
            this.client = _arr;
            setTimeout(() => {
                var L = 180 * $(".my-client-list1 div").length;
                this._loop(".my-client-list1",L,'left')
                this._loop(".my-client-list2",L,'right')
            }, 500);
        }
    }
})