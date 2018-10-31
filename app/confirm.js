const Question = require('./question');

class Confirm extends Question {

    constructor(name, message, defaultValue) {
        super(name, message, defaultValue);
        this.type = 'confirm';
        this.name = name;
        this.message = message;
        this.default = defaultValue || name;
        return this;
    }

}

module.exports = Confirm;