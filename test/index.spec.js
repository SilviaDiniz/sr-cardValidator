const mocha = require('mocha');
const chai = require('chai');
const card = require('../index');
const expect = chai.expect;

describe('card', function() {
  describe('#cardValidator', function() {

    describe('Quando o campo estiver incorreto.', function() {
      it('Deve lançar um erro.', function() {
        expect(card.cardValidator('36490102462661')).to.throw('Digite somente números.');
      });
    });

    describe('Quando o campo estiver vazio.', function() {
      it('Deve lançar um erro.', function() {
        expect(card.cardValidator()).to.be.empty;
      });
    });

    describe('Quando o campo estiver 1 digito.', function() {
      it('Deve lançar um erro.', function() {
        expect(card.cardValidator(1)).to.throw('Número do cartão muito curto.');
      });
    });

    describe('Quando o número for inteiro e válido.', function() {
      it('Deve retornar true.', function() {
        expect(card.cardValidator(36490102462661)).to.deep.equal(true);
      });
    });

    describe('Quando o número for inteiro e inválido.', function() {
      it('Deve retornar false.', function() {
        expect(card.cardValidator(02126001125100)).to.deep.equal(false);
      });
    });

  });
});
