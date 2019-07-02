const router = require('koa-router')()
const request = require("request");


let token = "",time = Date.now();
router.get("/app/wx/token",async(ctx, next)=>{
    let now = Date.now();
    // if(!token || (now - time) > 7000*1000){
        token = await new Promise((resolve,reject)=>{
            request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx2df0a9fe18f3cb02&secret=fb964c9eeaa0895370ddeef2e59fb9d7",async(err,res,body)=>{
                if(!err && res.statusCode == 200){
                    let token = res.body['access_token']
                    resolve(res)
                }
            })
        })
    // }

    const data = await new Promise((resolve,reject)=>{
        request("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+token+"&type=jsapi",async(err,res,body)=>{
            if(!err){
                resolve(res)
            }else{
                reject(err)
            }
        })
    })
    ctx.body = {msg:token,data:data,url:"https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+token+"&type=jsapi"};
})

module.exports = router;