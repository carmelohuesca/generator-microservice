class HomeController {
    static home(req, res, next) {
        res.send('<%=name%> works!');
    }
}
module.exports = HomeController;