const router = require('koa-router')()
const request = require("request");


let token = "", time = Date.now();
router.get("/app/wx/token",async(ctx, next)=>{
    let now = Date.now();
    if(!token || (now - time) > 7000*1000){
        token = await new Promise((resolve,reject)=>{
            request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx2df0a9fe18f3cb02&secret=fb964c9eeaa0895370ddeef2e59fb9d7",async(err,res,body)=>{
                if(!err && res.statusCode == 200){
                    let token = JSON.parse(res.body)['access_token'];
                    resolve(token)
                }
            })
        })
    }

    const data = await new Promise((resolve,reject)=>{
        request("https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+token+"&type=jsapi",async(err,res,body)=>{
            if(!err){
                let icket = JSON.parse(res.body)['ticket'];
                resolve(icket)
            }else{
                reject(err)
            }
        })
    })
    ctx.body = {msg:token,data:data,str:str};
})

function sj(){
    let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"],str = "";
    for(let i = 0; i < 16; i++){
        let num = arr[Math.ceil(Math.random()*36)];
        str+=num;
    }
    return str;
}

module.exports = router;