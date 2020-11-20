const koa = require('koa');
const app = new koa();
app.use(async (ctx, next) => {
    ctx.body = 'hello';
});
app.listen(5188);