const router = require('koa-router')()
const model  = require('../schema/user.js')
// 获取首页设置
router.get("/app/index",async(ctx,next)=>{
    let code = 0,msg="";
    let data = await new Promise((resolve, reject)=>{
        model.home.find({},(err,db)=>{
            if(!err){
                code = 200;
                msg = "查询成功"
                resolve(db)
            }else{
                code = 201;
                msg = "查询失败"
                resolve("")
            }
        })
    })
    ctx.body = {code:code,msg:msg,data:data}
})
// 保存首页设置
router.post("/app/index",async(ctx,next)=>{
    let code = 0,msg = "", req = ctx.request.body;
    await new Promise((resolve, reject)=>{
        model.home.find({},(err,db)=>{
            if(db.length){
                let id = db[0]._id;
                model.home.update({_id:id},{cont:req.cont},(err,db)=>{
                    if(!err){
                        msg = "更新成功!";
                        code = 200;
                        resolve()
                    }else{
                        msg = "更新失败!";
                        code = 201;
                        resolve()
                    }
                })
            }else{
                model.home.create({cont:req.cont},(err,db)=>{
                    if(!err){
                        msg = "保存成功!";
                        code = 200
                        resolve()
                    }else{
                        msg = "保存失败!";
                        code = 201;
                        resolve()
                    }
                })
            }
        })
    })
    ctx.body = {code:code,msg:msg}
})


// banner 设置
router.get("/app/get/banner",async(ctx,next)=>{
    let code = 0,msg="";
    let data = await new Promise((resolve, reject)=>{
        model.banner.find({},(err,db)=>{
            if(!err){
                code = 200;
                msg = "查询成功"
                resolve(db)
            }else{
                code = 201;
                msg = "查询失败"
                resolve("")
            }
        })
    })
    ctx.body = {code:code,msg:msg,data:data}
})
router.post("/app/set/banner",async(ctx,next)=>{
    let code = 0,msg = "", req = ctx.request.body;
    await new Promise((resolve, reject)=>{
        model.banner.find({},(err,db)=>{
            if(db.length){
                let id = db[0]._id;
                model.banner.update({_id:id},{cont:req.cont},(err,db)=>{
                    if(!err){
                        msg = "更新成功!";
                        code = 200;
                        resolve()
                    }else{
                        msg = "更新失败!";
                        code = 201;
                        resolve()
                    }
                })
            }else{
                model.banner.create({cont:req.cont},(err,db)=>{
                    if(!err){
                        msg = "保存成功!";
                        code = 200
                        resolve()
                    }else{
                        msg = "保存失败!";
                        code = 201;
                        resolve()
                    }
                })
            }
        })
    })
    ctx.body = {code:code,msg:msg}
})
module.exports = router;