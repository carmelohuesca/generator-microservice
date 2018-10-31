const Model = require('./<%=name%>.model');
const Handler = require('./<%=name%>.handler');
const BaseController = require('../base.controller');
const <%=model%> = Model.<%=model%>;


const NOT_FOUND = '<%=model%> not found';
const DELETED = '<%=model%> deleted';

class <%=model%>Controller extends BaseController {

  static create(req, res, next) {
    new <%=model%>(req.body).save().then(result => res.status(super.HTTP_STATES.CREATED).send(result));
  }

  static read(req, res, next) {
    <%=model%>.findOne({
      _id: req.params.id
    }, (error, item) => {
      item ? res.status(super.HTTP_STATES.SUCCESS).send(Handler.One(item)) : res.status(super.HTTP_STATES.NOT_FOUND).send(NOT_FOUND);
    });
  }

  static update(req, res, next) {
    delete req.body.id;
    const query = {
      _id: req.params.id
    }
    <%=model%>.findOne(query, (error, item) => {
      item ? <%=model%>.update(query, req.body, {},
        () => res.status(super.HTTP_STATES.UPDATED).json(item)) : res.status(super.HTTP_STATES.NOT_FOUND).send(NOT_FOUND);
    });
  }

  static delete(req, res, next) {
    <%=model%>.findOne({
      _id: req.params.id
    }, (error, item) => {
      item ? item.remove(
        () => res.status(super.HTTP_STATES.DELETED).send(DELETED)) : res.status(super.HTTP_STATES.NOT_FOUND).send(NOT_FOUND);
    });
  }

  static list(req, res, next) {
    <%=model%>.find((err, items) => res.status(super.HTTP_STATES.SUCCESS).json(Handler.List(items)));
  }

  static count(req, res, next) {
    res.json({
      count: <%=model%>.length
    });
  }

  static me(req, res, next) {
    res.send(req.headers);
  }

}
module.exports = <%=model%>Controller;
