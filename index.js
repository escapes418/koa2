const Koa = require('koa');
const loggerAsync  = require('./middleware/logger-async')
const router = require('./router')
const app = new Koa();

const bodyParser = require('koa-body');
app.use(bodyParser());
app.use(router.routes());

// class A {
//     get a(){
//         console.log('实例方法')
//     }
//     async success(){
//         console.log('实例方法成功')
//     }
// }

// class B extends A {
    
// }

// new B().a
// new B().success()
app.listen(3000);
console.log('[demo] start-quick is starting at port http://127.0.0.1:3000')