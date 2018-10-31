const FilesToCopy = require('./files-to-copy');
const Question = require('./question');
const Confirm = require('./confirm');
const Generator = require('yeoman-generator');

const MKDIRP = require('mkdirp');

module.exports = class GeneratorMicroservice extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    prompting() {
        return this.prompt([
            new Question('name', 'Nombre del Microservicio (plural): ', this.appname),
            new Question('model', 'Nombre del modelo de Datos (singular): ', this.model),
            new Question('description', 'Descripción del Microservicio: ', this.description),
            new Question('dbname', 'Nombre de la Base de Datos: ', this.dbname || 'mongodb://localhost:27017/microservices'),
            new Question('port', 'Puerto de Salida', 8080),
            new Question('wsport', 'Puerto de Sockets', 9876),
            new Question('version', 'Versión', this.version || '1.0.0'),
            new Confirm('sure', 'Seguro que quieres generar la estructura?', true)
        ]).then(answers => {
            this.microservice = {
                name: answers.name,
                description: answers.description,
                dbname: answers.dbname,
                model: answers.model.capitalize(),
                port: answers.port,
                wsport: answers.wsport,
                sure: answers.sure,
                version: answers.version
            };
            this.copyFiles(this.microservice);
        });
    }

    createFolders() {
        let foldername = this.microservice.name || 'no_name';
        MKDIRP(foldername + '/test');
        MKDIRP(foldername + '/src');
        MKDIRP(foldername + '/public');
    }

    copyFiles(options) {
        const FILES_TO_COPY = new FilesToCopy(options).files;
        let files = Object.keys(FILES_TO_COPY);
        if ((this.microservice.name) !== undefined && this.microservice.sure) {
            files.forEach((key) => {
                this.copyFile(FILES_TO_COPY[key].FROM, FILES_TO_COPY[key].TO);
            });
        }
    }

    copyFile(pathFromPackage, pathToPackage) {
        if (pathFromPackage) {
            this.fs.copyTpl(
                this.templatePath(this.getPathFrom(pathFromPackage)),
                this.destinationPath(this.getPathTo(pathToPackage)),
                this.microservice
            );
        }
    }

    getPathFrom(fileName) {
        if (fileName) {
            return [__dirname, 'templates', fileName].join('/');
        }
    }

    getPathTo(fileName) {
        if (fileName) {
            return [this.microservice.name, fileName].join('/');
        };
    }

}