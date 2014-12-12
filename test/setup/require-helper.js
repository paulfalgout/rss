module.exports = function(path) {
    global[path] = require('../../src/js/' + path);
    //return require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../../src/js/') + path);
}
