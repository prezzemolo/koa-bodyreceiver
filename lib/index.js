/**
 * readable stream reader
 * @param {stream.Readable} readable an Node.js readable stream
 * @returns {Promise<Buffer>}
 */
const reader = (readable) => new Promise((resolve, reject) => {
  let chunks = []
  readable.on('data', chunk => {
    chunks.push(chunk)
  })
  readable.on('end', () => {
    resolve(chunks.length > 0 ? Buffer.concat(chunks) : null)
  })
})

/**
 * simple koa.js body receiver
 * parsed body will be stored in ctx.body
 */
module.exports = async (ctx, next) => {
  ctx.request.body = await reader(ctx.req)
  await next()
}
