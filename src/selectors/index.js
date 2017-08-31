import { createSelector } from 'reselect'

const getItems = state => state
const salesTaxPercentSelector = state => 10
const importTaxPercentSelector = state => 5

export const getItemSelector = createSelector(
  getItems,
  items => items
)

export const subtotalSelector = createSelector(
  getItems,
  items => items.reduce((acc,item) => acc + parseFloat(item.price * item.quantity),0)
)

export const salestaxSelector = createSelector(
  getItems, salesTaxPercentSelector,
  (items, taxPercent) =>
    items.map(item =>
      item.exempt === true ? 0 : Math.ceil((parseFloat(item.price * item.quantity) * (taxPercent / 100))*20)/20
    )
)

export const importTaxSelector = createSelector(
  getItems,
  importTaxPercentSelector,
  (items, taxPercent) =>
    items.map(item =>
      item.checked === true ? Math.ceil((parseFloat(item.price * item.quantity) * (taxPercent / 100))*20)/20 : 0
    )
)

export const totalTaxSelector = createSelector(
  salestaxSelector,
  importTaxSelector,
  (salesTax, importTax) => salesTax.reduce((acc,item) => acc + item,0) + importTax.reduce((acc,item) => acc + item,0)
)

export const totalSelector = createSelector(
  subtotalSelector,
  totalTaxSelector,
  (subtotal, totalTax) => subtotal + totalTax
)
