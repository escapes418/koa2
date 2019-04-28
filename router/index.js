const Router = require('koa-router')
const controller = require('../controller/userController');

const router = new Router({})
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>表单</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" value="koa2"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});
router.get('/register', async (ctx, next) => {
    ctx.response.body = `<h1>表单</h1>
        <form action="/register" method="post">
            <p>Name: <input name="name" value="koa2"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});
router.post('/login', controller.checkLogin);
router.post("/register",controller.regsiterUser);
module.exports = router