const router = require('koa-router')()
const request = require("request");

router.get("/app/wx/token",async(ctx, next)=>{
    
    const token = await new Promise((resolve,reject)=>{
        request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx2df0a9fe18f3cb02&secret=fb964c9eeaa0895370ddeef2e59fb9d7",async(err,res,body)=>{
            if(!err && res.statusCode == 200){
                let token = res.body['access_token']
                resolve(token)
            }
        })
    })

    const data = new Promise((resolve,reject)=>{
        request("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+token+"&type=jsapi",async(err,res,body)=>{
            if(!err){
                resolve(res)
            }
        })
    })
    ctx.body = {data:data};
})

module.exports = router;