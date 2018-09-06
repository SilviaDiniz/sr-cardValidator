module.exports.cardValidator = function cardValidator(ncard) {

  if(ncard == '' || isNaN(ncard)) {
    throw new Error('Digite somente números.');
  }

  if(!isNaN(parseInt(ncard)) && isFinite(ncard)){
    throw new Error('Digite somente números.');
  }

  if(ncard.length === 1) {
    throw new Error('Número do cartão incompleto.');
  }

  var card = [];
  for (var i in creditCard) {
    card.push(parseInt(creditCard[i]));
  }
  card.reverse();

  var total = 0,
      result = 0,
      subTotal = 0;
  for (var x in card) {
    if(x % 2 !== 0){
      subTotal = card[x] * 2;
      if(subTotal > 9){
         subTotal -= 9;
      }
      total = total + subTotal;
    } else {
      card[x];
      total += card[x];
    }
    result = total % 10;
  }
 return result;
}
