var app = new Vue({
    el:"#app",
    data () {
        return {
            banner:"",
            brands:[],
        }
    },
    mounted() {
        banner((db)=>{
            this.banner = db.client;
        })
        $.ajax({
            url:"/app/index",
            type:"GET",
            success:(res)=>{
                let data = JSON.parse(res.data[0].cont).logos;
                this.brands = data;
            }
        })
    },
})
var scss = new Vue({
    el:"#scss",
    data () {
        return {
            isPhone:/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 1 : 0
        }
    }
})