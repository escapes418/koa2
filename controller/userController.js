const user = require('../service/user');
async function checkLogin(ctx,next){
    let{name,password} = ctx.request.body;
    let data = await user.checkUser(name,password);
    return ctx.response.body = data;
}

async function regsiterUser(ctx,next){
    let {name,password} = ctx.request.body;
    let data = await user.findUser(name,password);
    return ctx.response.body = data
}

module.exports ={
    checkLogin,
    regsiterUser
}