const authenticate = require('../../middlewares/authenticate');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

describe('middleware authenticate', () => {
  it('should create status 401 when user is not logged', () => {
    const req = {
      headers: {}
    };
    const res = {
      json: sinon.spy(),
    }
    authenticate(req, res);
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledOnceWithExactly({
      msg: 'Unauthorized',
    });
  });

  it('should call next when user is logged', () => {
    // Exercice
  });
});
