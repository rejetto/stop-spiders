exports.version = 1
exports.description = "Kindly ask robots to stop, responding to requests for \"robots.txt\" file"
exports.apiRequired = 1
exports.repo = "rejetto/stop-spiders"

exports.middleware = ctx => {
    if (ctx.path !== '/robots.txt') return
    ctx.body = "User-agent: *\nDisallow: /\n"
    return ctx.stop?.() || true
}