const Koa = require('koa')
const app = new Koa()
const receiver = require('..')

// load receiver middleware
app.use(receiver)

// return request body
app.use(async (ctx) => {
  // show content-type
  console.log(ctx.request.type)
  // return raw binary data
  ctx.body = ctx.request.body || 'empty'
})

// listen at port 8080
app.listen(8080)
