const _ = require('underscore');
class ItemsHandler {
    static One(dbResponse) {
        const item = dbResponse._doc;
        item.id = dbResponse._doc._id;
        delete item._id;
        delete item.__v;
        return item;
    }

    static List(dbResponse) {
        const list = _.map(dbResponse, doc => {
            const item = doc._doc;
            item.id = item._id;
            delete item._id;
            delete item.__v;
            return item;
        });
        return list;
    }

}

module.exports = ItemsHandler;