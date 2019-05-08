const Koa = require('koa');
const loggerAsync  = require('./middleware/logger-async')
const router = require('./router')
const app = new Koa();

const bodyParser = require('koa-body');
app.use(bodyParser());
app.use(router.routes());


app.listen(3000);
console.log('[demo] start-quick is starting at port http://127.0.0.1:3000')