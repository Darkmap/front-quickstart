import koa from 'koa';
import path from 'path';
import staticCache from 'koa-static-cache';
import views from 'koa-views';

const app = new koa();
const assetsPath = path.join(__dirname, 'public');

// Have to put before view render
app.use(staticCache(assetsPath));

app.use(views(__dirname + '/views', {
  map: {
    html: 'swig'
  }
}));

app.use(async function (ctx, next) {
  ctx.state = {};
  await ctx.render('index');
});

app.listen(4000);

console.log('server start listen at 4000');
