const path = require('path')

const ROOT_PATH = path.join(__dirname, '..')

module.exports = {
    appSrc: path.join(ROOT_PATH, 'src'),
    root: path.join(ROOT_PATH),
    distSrc: path.join(ROOT_PATH, 'dist')
}
