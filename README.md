koa-bodyreceiver
=====
[![][mit-badge]][mit] [![][node-badge]][node] [![][koa-badge]][koa]  
a middleware to receive request body.

about
-----
receive request body, and store it to ctx.request.body.  
this middleware won't parse body.
ctx.request.body will be just Buffer, if body exist. else, it will be null.

usage
-----
see sample directory.

license
-----
[The MIT License](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[node]: https://nodejs.org/
[node-badge]: https://img.shields.io/badge/node-%3E%3D%207.6.0-74aa63.svg?style=flat-square
[koa]: http://koajs.com/
[koa-badge]: https://img.shields.io/badge/koa-2-67d4d4.svg?style=flat-square