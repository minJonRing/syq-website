var scss = new Vue({
    el:"#scss",
    data: {
        isPhone:/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 1 : 0
    },
    mounted(){
        
    },
    methods:{
    }
})
var app = new Vue({
    el:"#app",
    data:{
        banner:""
    },
    mounted(){
        banner((db)=>{
            this.banner = db.call;
        })
    }
})