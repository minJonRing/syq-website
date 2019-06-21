var app = new Vue({
    el:"#scss",
    data () {
        return {
            banner:"",
            isPhone:/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 1 : 0,
            works:[],
            list:[],
            pages:0,
            page:0
        }
    },
    mounted(){
        banner((db)=>{
            this.banner = db.work;
        })
    },
    methods:{
    }
})