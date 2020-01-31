const app = require('../app');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const Contact = require('../models/contact');
const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiHttp);

describe('functionals tests', () => {
  describe('GET /api/contacts', () => {
    it('should return contacts and status 200', async () => {
      sinon.mock(Contact)
        .expects('find')
        .resolves([{prenom: 'Toto', id: '1234'}])
        .calledWithExactly();

      const res = await chai.request(app)
        .get('/api/contacts');

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal([{prenom: 'Toto', id: '1234'}]);
    });
  })
});
