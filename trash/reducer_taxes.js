Math.round = (function() {
  var originalRound = Math.round;
  return function(number, precision) {
    precision = Math.abs(parseInt(precision)) || 0;
    var multiplier = Math.pow(10, precision);
    return (originalRound(number * multiplier) / multiplier);
  };
})();

export const taxes = (state = 0, action) => {
  switch(action.type) {
    case 'CALCULATE_TAX':
        var tax = []
        var defaultTax = 0
        for(var i=0; i<action.payload.length; i++){
          if(action.payload[i].exempt === true){
            tax.push(defaultTax)
          } if(action.payload[i].exempt === false){
            tax.push(Math.round(action.payload[i].quantity * (0.1 * action.payload[i].price),2))
          }
          // console.log(tax)
        }
        function add(a, b) {
          return a + b;
        };
        var sum = parseFloat(tax.reduce(add, 0))
        // console.log(sum);
        return Math.round(sum,2)
  }
  return state
}

export default taxes;
