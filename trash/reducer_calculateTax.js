// const items = (state=0, action) => {
//   switch(action.type) {
//     case 'CALCULATE_TAX':
//     const totalTax = (action.payload) => {
//       var tax = 0
//       if(action.payload.length > 0){
//         for(var i = 0; i < action.payload.length; i++){
//           tax = tax + (0.1*action.payload[i].price)
//           return tax
//         }
//       }else if(action.payload.length === 0){
//         return state
//       }
//     }
//   }
//   return state
// }
//
// export default items;
