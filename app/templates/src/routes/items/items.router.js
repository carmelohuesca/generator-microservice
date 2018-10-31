const router = require('../router');
const <%=name%>Controller = require('./<%=name%>.controller');

router.get('/<%=name%>', <%=name%>Controller.list);
router.get('/<%=name%>/count', <%=name%>Controller.count);
router.get('/<%=name%>/:id', <%=name%>Controller.read);
router.delete('/<%=name%>/:id', <%=name%>Controller.delete);
router.post('/<%=name%>', <%=name%>Controller.create);
router.put('/<%=name%>/:id', <%=name%>Controller.update);

module.exports = router;