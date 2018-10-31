class FilesToCopy {

    constructor(options) {
        this.files = {};
        this.options = options || {};
        this.copyFiles();
        return this;
    }

    copyFile(name, fromPath, toPath) {
        this.files[name.toUpperCase()] = {
            FROM: fromPath,
            TO: toPath ? toPath : fromPath
        };
        return this;
    }

    copyFiles() {
        const name = this.options.name ? this.options.name : 'items';
        return this.copyFile('PACKAGE', 'package.json')
            .copyFile('README', 'README.md')
            .copyFile('GITIGNORE', '.gitignore')
            .copyFile('INDEX', 'index.js')
            .copyFile('ESLINT', '.eslintrc')
            .copyFile('EDITOR_CONFIG', '.editorconfig')
            .copyFile('TEST_APP', 'test/app.spec.js')
            .copyFile('SRC_INDEX', 'src/index.js')

            .copyFile('SERVER_INDEX', 'src/server/index.js')
            .copyFile('SERVER_APP', 'src/server/app.js')
            .copyFile('SERVER_CORS', 'src/server/cors.js')
            .copyFile('SERVER_DB', 'src/server/db.js')
            .copyFile('SERVER_ENV', 'src/server/environment.js')
            .copyFile('SERVER_LOG', 'src/server/log.js')
            .copyFile('SERVER_SOCKET', 'src/server/socket.js')
            .copyFile('SERVER_STATUS', 'src/server/status.js')

            .copyFile('ROUTES_INDEX', 'src/routes/index.js')
            .copyFile('ROUTES_ROUTER', 'src/routes/router.js')
            .copyFile('ROUTES_BASE_MODEL', 'src/routes/base.model.js')
            .copyFile('ROUTES_BASE_CONTROLLER', 'src/routes/base.controller.js')

            .copyFile('ROUTES_HOME_INDEX', 'src/routes/home/index.js')
            .copyFile('ROUTES_HOME_CONTROLLER', 'src/routes/home/home.controller.js')
            .copyFile('ROUTES_HOME_ROUTER', 'src/routes/home/home.router.js')

            .copyFile('ROUTES_NOT_FOUND_INDEX', 'src/routes/not-found/index.js')
            .copyFile('ROUTES_NOT_FOUND_CONTROLLER', 'src/routes/not-found/not-found.controller.js')
            .copyFile('ROUTES_NOT_FOUND_ROUTER', 'src/routes/not-found/not-found.router.js')

            .copyFile('ROUTES_ITEMS_INDEX', 'src/routes/items/index.js', 'src/routes/' + name + '/index.js')
            .copyFile('ROUTES_ITEMS_CONTROLLER', 'src/routes/items/items.controller.js', 'src/routes/' + name + '/' + name + '.controller.js')
            .copyFile('ROUTES_ITEMS_HANDLER', 'src/routes/items/items.handler.js', 'src/routes/' + name + '/' + name + '.handler.js')
            .copyFile('ROUTES_ITEMS_MODEL', 'src/routes/items/items.model.js', 'src/routes/' + name + '/' + name + '.model.js')
            .copyFile('ROUTES_ITEMS_ROUTER', 'src/routes/items/items.router.js', 'src/routes/' + name + '/' + name + '.router.js')

            .copyFile('ENV', '.env');
    }
}

module.exports = FilesToCopy;