webpackJsonp([1],{FOQh:function(t,i){},FcWA:function(t,i){},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("7+uW");var e=function(){var t,i,a,s=document.documentElement,e=(document.createElement("style"),document.querySelector('meta[name="viewport"]'));a=1/(t=window.devicePixelRatio||1);let n=window.screen.width||s.clientWidth;i=n*t/10,e.setAttribute("content","width="+t*n+", initial-scale = "+a+", maximum-scale = "+a+",minimum-scale = "+a+", user-scalable = no "),s.setAttribute("data-dpr",t),s.style.fontSize=i+"px",window.rem2px=function(t){return(t=parseFloat(t))*i},window.px2rem=function(t){return(t=parseFloat(t))/i},window.dpr=t,window.rem=i},n={name:"App",mounted:function(){e()}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("X73E")},null,null).exports,o=a("/ocq"),l={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"phone",style:{background:this.color}},[i("p",[this._v("咨询热线："+this._s(this.phone))]),this._v(" "),i("a",{attrs:{href:"tel:"+this.phone}},[this._v("打")])])},staticRenderFns:[]};var p={name:"info",data:function(){return{}},props:["direction","ww","hh","config"],mounted:function(){},methods:{handleClick:function(t,i){i||this.$emit("handleGrand",t)}},components:{Phone:a("VU/8")({name:"phone",props:["color","phone"],data:function(){return{}}},l,!1,function(t){a("FcWA")},"data-v-300c6e4c",null).exports}},h={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"info"},[a("div",{class:["box",{active:!t.direction}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("div",{staticClass:"info-left"},[t._m(0),t._v(" "),a("div",{staticClass:"info-text"},[t._v(t._s(t.config.title))])]),t._v(" "),a("div",{staticClass:"info-right"},[a("div",{staticClass:"info-cont"},t._l(t.config.arr,function(i,s){return a("a",{key:s,staticClass:"info-item",attrs:{href:i.href,target:i.isBlank?"_blank":""},on:{click:function(a){return a.stopPropagation(),t.handleClick(s,i.isBlank)}}},[a("div",{staticClass:"info-item-before"},[t._v(t._s(i.name))]),t._v(" "),a("div",{staticClass:"info-item-cont"},[a("p",t._l(i.child,function(i,s){return a("span",{key:s,class:["block",{none:!i.is}]},[t._v(t._s(i.text))])}),0),t._v(" "),a("em",{staticClass:"bar1"}),t._v(" "),a("em",{staticClass:"bar2"})])])}),0),t._v(" "),a("phone",{attrs:{color:"rgba(200,200,200,.8)",phone:t.config.phone}})],1),t._v(" "),a("div",{staticClass:"info-bottom"},[t._v("本宣传资料为邀约邀请,相关内容不排除因政府相关规划,规定及开发商未能控制的原因而发生变化。文中部分建筑楼体图片为效果图,与实际存在一定的差异。本公司保留对宣传资料修改的权利,敬请留意最新资料。")])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"info-top"},[i("div",{staticClass:"info-return"},[i("span"),this._v(" "),i("span"),this._v(" "),i("span")]),this._v(" "),i("div",{staticClass:"info-title"},[i("p",{staticClass:"info-en"},[this._v("VANKE")]),this._v(" "),i("em"),this._v(" "),i("p",{staticClass:"info-cn"},[this._v("杭州")])])])}]};var d={p1:{title:"奥力万科中心",bg:"",arr:[{name:"交通区位",child:[{is:1,text:"阿大撒"},{is:1,text:"阿大撒"},{is:1,text:"阿大撒"}],href:"javascript:;",isBlank:!1},{name:"企业入住",child:[{is:0,text:"阿大撒"},{is:0,text:"阿大撒"},{is:1,text:"阿大撒"}],href:"https://www.baidu.com",isBlank:!0},{name:"政策利好",child:[{is:0,text:"阿大撒"},{is:1,text:"阿大撒"},{is:1,text:"阿大撒"}],href:"javascript:;",isBlank:!1},{name:"产品信息",child:[{is:0,text:"阿大撒"},{is:1,text:"阿大撒"},{is:1,text:"阿大撒"}],href:"javascript:;",isBlank:!1}],href:"javascript:;",isBlank:!1,phone:"12345678912"},p6:[[{add:"http://www.hzsinq.com/static/img/p6/at/1.png",isText:!1,tel:"tel:15657162923"},{add:"http://www.hzsinq.com/static/img/p6/at/info.png",isText:!0,tel:"tel:15657162923",text:[{name:"业态规划:",cont:"办公+商业"},{name:"办公建面:",cont:"约6.1万方"},{name:"单层建面:",cont:"约2100方"},{name:"商业建面:",cont:"约8000方"},{name:"交付时间:",cont:"2021年3月"},{name:"项目特色:",child:["1、亚奥门户的国际商务站位，直面亚运村","2、LEED金认证甲级办公产品","3、日本三菱地所国际合作","4、创新高效的工作场景"]},{name:"设计独创性:",child:["多元复合开放的开发理念","2.地标性 双子塔、五大互动空间、城市开放广场","3.世界百强梁黄顾设计"]}]}],[{add:"http://www.hzsinq.com/static/img/p6/jn/1.png",isText:!1,tel:"tel:15088716743"},{add:"http://www.hzsinq.com/static/img/p6/jn/info.png",isText:!0,tel:"tel:15088716743",text:[{name:"业态规划:",cont:"超甲级塔楼办公+甲级独栋办公+滨水商业"},{name:"办公建面:",cont:"约5万方"},{name:"单层建面:",cont:"约1580方（超甲级塔楼）"},{name:"商业建面:",cont:"约23000万方"},{name:"交付时间:",cont:"2023年"},{name:"项目特色:",cont:"面向2022国际盛会，布局亚奥板块，以“城市阳台”开放式设计理念，打造滨水、复合、人文的未来社区，构建充满活力的亚洲国际滨水商务公园。秉承“中国风范、杭州韵味”的设计指导，以错落有致、高山流水为设计意向，充分发挥亲水的地块特性与中国杭州的城市特色"}]}],[{add:"http://www.hzsinq.com/static/img/p6/kh/1.png",isText:!1,tel:"tel:0571-28822255"},{add:"http://www.hzsinq.com/static/img/p6/kh/info.png",isText:!0,tel:"tel:0571-28822255",text:[{name:"业态规划:",cont:"甲级办公,知识消费体验场,创新会议中心,文化剧院,美术展览馆"},{name:"办公建面:",cont:"约22万方"},{name:"单层建面:",cont:"一期办公面积约80-800平方米,二期办公面积约150-2000平方米"},{name:"交付时间:",cont:"一期已交付,二期2018年底,三期正在\t建设中,预计2019年底交付,四期尚未动工预计2023年交付"},{name:"项目特色:",child:["1、同步国际的商务标准\n约78% 超高得房率 8部群控系统电梯，特设VIP梯铜质双层大堂，沉浸式艺术体验约2.8 米标准净高人性化吊顶设计约1.65 米净宽全落地窗可开启窗，自由通风调节","2、创新高效的工作场景美国LEED 金认证：低碳匠心锻造约80mm 网络地板：网络地板，灵活线路布局LOW-E 中空玻璃：中空玻璃幕墙，减少室内能耗24h 空调冷却水：绿色节能，长效办公保障","3、智慧办公，搭载阿里云科技集合阿里云loT 科技4 大系统16 大子系统，将陆续启用更多智慧化科技，为企业开启高效办公时代四、58项服务体系为办公创造更多可能"]},{name:"设计独创性:",child:["集萃国际设计资源，同步世界趋势² KPF/NIKKEN/Office ma/2X4","1、开放、共享、创新：开放的城市区域活力中心，公共交流空间，将室外优质资源与大家共享","2、融会新经典的景观美学，打造了“中国丝绸+马赛克概念”的景观规划模式","3、景观功能化，打造身心休憩的悠闲场所"]}]}],[{add:"http://www.hzsinq.com/static/img/p6/lc/1.png",isText:!1,tel:"tel:15990174232"},{add:"http://www.hzsinq.com/static/img/p6/lc/info.png",isText:!0,tel:"tel:15990174232",text:[{name:"业态规划:",cont:"办公+商业+酒店+剧院"},{name:"办公建面:",cont:"约5万方"},{name:"单层建面:",cont:"约2500-4800方"},{name:"商业建面:",cont:"约1800方"},{name:"交付时间:",cont:"2021年底"},{name:"项目特色:",child:["1.TOD开发模式：地铁二号线杜甫村站为枢纽，链接政企学研资源",".垂直业态复合：10.8万方体量集剧院、办公、酒店、商业为一体，打造区域商务、活力高地"]},{name:"设计独创性:",child:["1.光之塔：五千年五道光体系，取意良渚符号，致敬良渚文明","2.光剧场：7000方剧院，良渚文化艺术高地"]}]}],[{add:"http://www.hzsinq.com/static/img/p6/wl/1.png",isText:!1,tel:"tel:15055308370"},{add:"http://www.hzsinq.com/static/img/p6/wl/info.png",isText:!0,tel:"tel:15055308370",text:[{name:"业态规划:",cont:"办公+商业+文化"},{name:"办公建面:",cont:"规划中，约16.6万方"},{name:"单层建面:",cont:"约370-2000方"},{name:"商业建面:",cont:"规划中，约6.55万方"},{name:"交付时间:",cont:"一期2021年底"},{name:"项目特色:",child:["1、未来科技城，城市科创极核","2、TOD站城一体化开发，产城融合模式，未来社区实践引领","3、融合办公、商业、运动中心、艺术中心、公共空间等复合业态","4、杭州西中心，以总部生态为企业创建发展的高速通道","5、立体绿色生态系统，自然与生活交融共生","6、标准办公与独栋办公集萃，满足全周期企业发展需求"]}]}],[{add:"http://www.hzsinq.com/static/img/p6/yh/1.png",isText:!1,tel:"tel:0571-88998899"},{add:"http://www.hzsinq.com/static/img/p6/yh/2.png",isText:!1,tel:"tel:0571-88998899"},{add:"/static/img/p6/yh/info.png",isText:!0,tel:"tel:0571-88998899",text:[{name:"业态规划:",cont:"甲级办公、缤纷商业、CASA、会展中心、汽车\t博物馆、主题酒店"},{name:"办公建面:",cont:"约17万方"},{name:"单层建面:",cont:"约面积段70-1800方"},{name:"商业建面:",cont:"约2.2万方"},{name:"交付时间:",cont:"一期2020年11月"},{name:"项目特色:",child:["1、拱墅之芯：拱墅“十三五规划”区域，十大产业平台-汽车互联网小镇核心项目","2、“政用产学研”协同创新：落地小镇管委会和党群服务中心，与上海交大科技园、天猫汽车、懂车帝、哈尼之驾等达成战略合作，引进国内首家美国孵化器Runway","3、复合业态：甲级办公 | 缤纷商业 | CASA | 汽车博物馆 | 会展中心 | 主题酒店六大业态复合，变革商务生态全图景","4、甲级办公：①商务集群：约17万方写字楼 ②匠心产品：约1000㎡精装大堂/约4.2m、约4.76m多样层高选择/约100mm网络地板/双层中空LOW隔音玻璃/8部高速电梯 ③活力景观：滨河生态景观 | 百米景观长廊 | 多功能活力广场 | 速度光影漫步道","5、服务创新：大屋顶，星商汇，创新中心，产业发展平台，四大服务平台为企业护航"]},{name:"设计独创性:",child:["1.创新体验中心：建筑造型酷似汽车仪表盘，打造“城市汽车发布秀场”","2.六大业态复合，规划会展中心、汽车博物馆等城市级配套","3.活力景观：滨河生态景观 | 百米景观长廊 | 多功能活力广场 | 速度光影漫步道"]}]}]]},w={name:"home",data:function(){return{host:"http://www.hzsinq.com",config:d.p6,bar:0,loadingText:"六大万科中心，即将开启",imgOver:!1,start:!1,closeVideo:!1,startVideo:!1,awaitOne:0,awaitTow:0,ww:0,hh:0,swiperNow:0,trans:!1,swiperTo:!1,swiperTo1:!1,swiperOption:{},swiperChildOption:{},swiperGrandOption:{},swiperScrollOption:{},p4Img:"",awaitImg:[],loadImg:[],childIndex:0}},created:function(){!function(){var t,i,a,s=document.documentElement,e=(document.createElement("style"),document.querySelector('meta[name="viewport"]'));t=window.devicePixelRatio||1,a=1/t;var n=window.screen.width||s.clientWidth;i=n*t/10,e.setAttribute("content","width="+t*n+", initial-scale = "+a+", maximum-scale = "+a+",minimum-scale = "+a+", user-scalable = no "),s.setAttribute("data-dpr",t),s.style.fontSize=i+"px",window.rem2px=function(t){return(t=parseFloat(t))*i},window.px2rem=function(t){return(t=parseFloat(t))/i},window.dpr=t,window.rem=i}(),this.handleInitSwiper(0)},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiperChild:function(){return this.$refs.childSwiper.swiper},swiperGrand:function(){return this.$refs.grandSwiper.swiper},videoEl:function(){return this.$refs.video},audioEl:function(){return this.$refs.audio}},watch:{awaitOne:function(t){this.bar=Math.round(t/9*100),9==t&&(this.loadingText="点击进入",this.handleStart())},closeVideo:function(t){t&&this.$refs.audio.paused&&document.querySelector("audio").play()}},mounted:function(){var t=this;this.$nextTick(function(){t.ww=t.$refs.home.clientWidth,t.hh=t.$refs.home.clientHeight});var i="onorientationchange"in window?"orientationchange":"resize",a=this;function s(t){0==window.orientation||180==window.orientation?a.trans=!1:a.trans=!0}window.addEventListener(i,s,!1),s(),this.handleAwaitOne()},methods:{handleStart:function(){if(!(this.bar<99)){this.imgOver=!0,this.start=!0;try{document.addEventListener("WeixinJSBridgeReady",function(){document.querySelector("video").play(),document.querySelector("audio").play(),handleAjax()},!1)}catch(t){}}},handleInitSwiper:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this;this.swiperOption={direction:"vertical",pagination:{el:".swiper-pagination"},on:{slideChangeTransitionStart:function(){var a=this.activeIndex;a!=t+1||i.swiperNow!=t||i.swiperTo?a!=t+2||i.swiperNow!=t+1||i.swiperTo1?(a==t&&(i.swiperTo=!1),a==t+1&&(i.swiperTo1=!1),i.swiperNow=a):i.swiper.slideTo(t+1):i.swiper.slideTo(t)}}},this.swiperChildOption={pagination:{el:".swiper-child-pagination"},on:{slideChangeTransitionStart:function(){i.childIndex=this.activeIndex}}},this.swiperGrandOption={mousewheel:!0,slidesPerView:"auto",pagination:{el:".swiper-grand-pagination"}},this.swiperScrollOption={direction:"vertical",slidesPerView:"auto",mousewheelControl:!0,freeMode:!0,nested:!0}},handleInitImg:function(){var t=this,i=new Image;i.onload=function(){t.awaitOne+=1,t.p4Img="http://www.hzsinq.com/static/img/p4.png"},i.src="http://www.hzsinq.com/static/img/p4.png";for(var a=1;a<7;a++){var s=new Image;s.onload=function(){t.awaitOne+=1},s.src="http://www.hzsinq.com/static/img/p5/"+a+".png"}},handleCloseVideo:function(){this.closeVideo=!0,this.$refs.audio.paused&&document.querySelector("audio").play()},handleAwaitOne:function(){var t=this,i=!1,a=!1;this.videoEl.oncanplay=function(){t.awaitOne+=1,i=!0},this.videoEl.onended=function(){t.closeVideo=!0,t.$refs.audio.paused&&document.querySelector("audio").play()},this.audioEl.oncanplay=function(){t.awaitOne+=1,a=!0},setTimeout(function(){i||(t.awaitOne+=1),a||(t.awaitOne+=1),t.handleInitImg()},5e3)},handleShowImg:function(t){return!!this.loadImg[t]&&(this.loadImg[t].bg&&this.swiperNow==t)},handleToChild:function(t){this.swiperTo=!0,this.swiper.slideTo(1),this.swiperChild.slideTo(t,0),this.childIndex=t},handleGetGrand:function(t){this.swiperTo1=!0,this.swiper.slideTo(2),this.swiperGrand.slideTo(t,0)}},components:{P5:a("VU/8")(p,h,!1,function(t){a("T5t3")},"data-v-977ce5e6",null).exports}};var m={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{ref:"home",staticClass:"home"},[a("div",{class:["loading",{active:t.start}],on:{click:function(i){return i.stopPropagation(),t.handleStart(i)}}},[a("div",{staticClass:"loading-text"},[a("p",[t._v(t._s(t.loadingText))]),t._v(" "),a("p",[t._v("建议手机横屏观看")])]),t._v(" "),a("div",{staticClass:"progress"},[a("span",{staticClass:"bar",style:{width:t.bar+"%"}})])]),t._v(" "),t.closeVideo?t._e():a("div",{staticClass:"video",on:{click:function(i){return i.stopPropagation(),t.handleCloseVideo(i)}}},[a("div",{class:["box",{active:t.trans}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("canvas",{staticClass:"can"}),t._v(" "),a("video",{ref:"video",attrs:{src:"http://www.hzsinq.com/static/img/init.mp4","x-webkit-airplay":"true","webkit-playsinline":"true",playsinline:"true",preload:"auto","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}})])]),t._v(" "),a("div",{staticClass:"mp3"},[a("audio",{ref:"audio",attrs:{src:"http://www.hzsinq.com/static/img/bg.mp3",loop:""}})]),t._v(" "),a("swiper",{ref:"mySwiper",class:["swiper swiper-one",{active:t.closeVideo}],attrs:{options:t.swiperOption}},[a("swiper-slide",{class:{active:0==t.swiperNow}},[a("div",{staticClass:"box",style:{width:t.hh+"px",height:t.ww+"px"}},[t.p4Img?a("img",{class:{active:t.trans&&0==t.swiperNow},attrs:{src:t.p4Img,alt:""}}):t._e(),t._v(" "),a("div",{class:["controller",{active:t.trans&&0==t.swiperNow}]},[a("a",{staticClass:"a1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(3)}}}),t._v(" "),a("a",{staticClass:"a2",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(5)}}}),t._v(" "),a("a",{staticClass:"a3",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(0)}}}),t._v(" "),a("a",{staticClass:"a4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(4)}}}),t._v(" "),a("a",{staticClass:"a5",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(2)}}}),t._v(" "),a("a",{staticClass:"a6",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleToChild(1)}}})])])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("swiper",{ref:"childSwiper",staticClass:"swiper active",attrs:{options:t.swiperChildOption}},[a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/1.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/at/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"}},[a("img",{attrs:{src:"/static/img/p5/at/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"javascript:",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/at/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/at/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:15657162923"}})])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/2.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/jn/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"}},[a("img",{attrs:{src:"/static/img/p5/jn/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"javascript:",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/jn/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/jn/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:15088716743"}})])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/3.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/kh/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"}},[a("img",{attrs:{src:"/static/img/p5/kh/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"javascript:",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/kh/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/kh/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:0571-28822255"}})])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/4.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/lc/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"}},[a("img",{attrs:{src:"/static/img/p5/lc/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"javascript:",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/lc/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/lc/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:15990174232"}})])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/5.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/wl/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"}},[a("img",{attrs:{src:"/static/img/p5/wl/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"javascript:",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/wl/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/wl/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:15055308370"}})])]),t._v(" "),a("swiper-slide",{class:{active:1==t.swiperNow}},[a("div",{class:["box p5-box",{active:t.trans&&1==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{class:["bg p5-box-bg",{active:t.trans&&2==t.swiperNow}],attrs:{src:"http://www.hzsinq.com/static/img/p5/6.png",alt:""}}),t._v(" "),a("a",{staticClass:"p5-1",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(0)}}},[a("img",{attrs:{src:"/static/img/p5/yh/1.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-2",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(1)}}},[a("img",{attrs:{src:"/static/img/p5/yh/4.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-3",attrs:{href:"/static/img/1.pdf",download:"拱墅汽车互联网小镇政策扶持汇编和举措——特色小镇申报.pdf",target:"_blank"}},[a("img",{attrs:{src:"/static/img/p5/yh/3.png",alt:""}})]),t._v(" "),a("a",{staticClass:"p5-4",attrs:{href:"javascript:"},on:{click:function(i){return i.stopPropagation(),t.handleGetGrand(2)}}},[a("img",{attrs:{src:"/static/img/p5/yh/2.png",alt:""}})]),t._v(" "),a("a",{staticClass:"call",attrs:{href:"tel:0571-88998899"}})])]),t._v(" "),a("div",{staticClass:"swiper-child-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),a("swiper-slide",{class:{active:2==t.swiperNow}},[a("swiper",{ref:"grandSwiper",staticClass:"swiper active",attrs:{options:t.swiperGrandOption}},[t._l(t.config[t.childIndex],function(i,s){return a("swiper-slide",{key:s,class:{active:1}},[a("div",{class:["box p6-box",{active:t.trans&&2==t.swiperNow}],style:{width:t.hh+"px",height:t.ww+"px"}},[a("img",{staticClass:"p6-box-bg",attrs:{src:i.add,alt:""}}),t._v(" "),a("a",{staticClass:"p6-call",attrs:{href:i.tel}}),t._v(" "),a("div",{staticClass:"p6-cont",attrs:{if:"item.isText"}},[a("swiper",{ref:"scrollSwiper",refInFor:!0,staticClass:"swiper active",attrs:{options:t.swiperScrollOption}},[a("swiper-slide",{staticClass:"active scroll-swiper"},t._l(i.text,function(i,s){return a("div",{key:s,staticClass:"p6-cont-box"},[a("div",{staticClass:"p6-cont-title"},[t._v(t._s(i.name))]),t._v(" "),i.cont?a("div",{staticClass:"p6-cont-text",domProps:{innerHTML:t._s(i.cont)}}):t._e(),t._v(" "),i.child?a("div",{staticClass:"p6-cont-text"},t._l(i.child,function(i,s){return a("p",{key:s},[t._v(t._s(i))])}),0):t._e()])}),0)],1)],1)])])}),t._v(" "),a("div",{staticClass:"swiper-grand-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},staticRenderFns:[]};var g=a("VU/8")(w,m,!1,function(t){a("FOQh")},"data-v-76246bea",null).exports;s.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),u=a("7QTg"),f=a.n(u);a("v2ns");s.a.use(f.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:v,components:{App:c},template:"<App/>"})},T5t3:function(t,i){},X73E:function(t,i){},v2ns:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.ba2edbedea11bf4f5fe0.js.map