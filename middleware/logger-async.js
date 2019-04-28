function log(ctx){
    console.log(ctx.method, ctx.header.host+ctx.url)
    console.log(ctx)
}

// module.exports = function(){
//     return async function(ctx,next){
//         log(ctx)
//         next()
//     }
// }

module.exports = async (ctx,next) =>{
    
    await next()
    log(ctx);
}
