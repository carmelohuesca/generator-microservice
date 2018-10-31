const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server');
const should = chai.should();
chai.use(chaiHttp);
const api = server.init();

describe('<%=name%>', () => {
    it('should list ALL <%=name%> on /<%=name%> GET', done => {
        chai.request(api)
            .get('/<%=name%>')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });
    it('should list a SINGLE <%=name%> on /<%=name%>/<id> GET', done => {
        chai.request(api)
            .get('/<%=name%>/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
            });
    });
    it('should add a SINGLE <%=name%> on /<%=name%> POST');
    it('should update a SINGLE <%=name%> on /<%=name%>/<id> PUT');
    it('should delete a SINGLE <%=name%> on /<%=name%>/<id> DELETE');
});