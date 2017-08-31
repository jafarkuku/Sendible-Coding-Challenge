export const total = (state = 0, action) => {
  switch(action.type) {
    case 'CALCULATE_TOTAL':
      if(action.payload.length > 0){
        var tax = []
        var initaliPrices = []
        var prices = []
        for(var i=0; i<action.payload.length; i++){
          if(action.payload[i].checked === true){
            var percentage = 0.05 * parseFloat(action.payload[i].price)
            var itemPrice = action.payload[i].quantity * (percentage + parseFloat(action.payload[i].price))
            prices.push(itemPrice)
            console.log(prices)
            var sum = prices.reduce(function add(a, b) {
                          return a + b;
            }, 0)
          }
          else if(action.payload[i].checked === false){
            var itemPrice = parseFloat(action.payload[i].price)
            prices.push(action.payload[i].quantity * itemPrice)
            var sum = prices.reduce(function add(a, b) {
                          return a + b;
            }, 0)
          }
        }
        return sum
      }
  }
  return state
}

export default total;
