const router = require('koa-router')()
const request = require("request");
const sha1 = require("sha1");


let token = "", time = Date.now();
let wxid = "wxa369ba840dd0d3ce";
let secret = "ac7e618d9571dc631a9de467bcfff7b7";
router.get("/app/wx/token",async(ctx, next)=>{
    let rootUrl = ctx.req.headers.referer;
    ctx.body = {};
    let now = Date.now();
    // if(!token || (now - time) > 7000*1000){
        token = await new Promise((resolve,reject)=>{
            request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+wxid+"&secret="+secret,async(err,res,body)=>{
                if(!err && res.statusCode == 200){
                    let token = JSON.parse(res.body)['access_token'];
                    resolve(token)
                }
            })
        })
    // }

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
    let nonceStr = sj();
    let str = `jsapi_ticket=${data}&noncestr=${nonceStr}&timestamp=${now}&url=${rootUrl}`
    let shaObjs = sha1(str);
    ctx.body = {
        str:[token,data,str],
        appId:wxid,
        timestamp:now,
        nonceStr:nonceStr,
        signature:shaObjs
    };
})

function sj(){
    let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"],str = "";
    for(let i = 0; i < 16; i++){
        let num = arr[Math.floor(Math.random()*36)];
        str+=num;
    }
    return str;
}

module.exports = router;