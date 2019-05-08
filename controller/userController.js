const user = require('../service/user');
const svgCaptcha = require('svg-captcha');
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

async function getCaptcha(ctx,next){
    const captcha = svgCaptcha.create({
        width: 96,
        height: 32,
        fontSize: 40,
        color: true
    });
    console.log(captcha.text.toLowerCase())
    // ctx.session.code = captcha.text.toLowerCase()
    
    return ctx.response.body = captcha.data;
}

module.exports ={
    checkLogin,
    regsiterUser,
    getCaptcha
}