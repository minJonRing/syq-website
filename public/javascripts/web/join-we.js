var app = new Vue({
    el:"#app",
    data: {
        banner:"",
        core:[
            {img:"",name:"营销部",text:"发掘品牌内涵，切合消费者需求，针对不同客户定制营销战略。"},
            {img:"",name:"策划部",text:"以全案策划为载体，达到提升品牌价值的目的，是实现创意的坚实基础。"},
            {img:"",name:"三维渲染",text:"以“视觉”作为沟通和表现方式，通过精湛的渲染展示独具风格的人物及场景。"},
            {img:"",name:"后期部",text:"制作特技镜头，完善镜头衔接，合成画面音效，把控动画整体节奏，打造出更加精细的视觉效果。"},
            {img:"",name:"影视部",text:"结合表演艺术本身，通过全方位、多角度的拍摄，诠释大气、震撼的影视宣传片。"},
            {img:"",name:"推广部",text:"整合品牌优势，利用产品动画的业务营销更好地投放市场，帮助企业达到有效传播。"}
        ],
        
    },
    mounted(){
        banner((db)=>{
            this.banner = db.join;
        })
    },
    methods:{
    }
})
var scss = new Vue({
    el:"#scss",
    data:{
        isPhone:/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 1 : 0
    }
})