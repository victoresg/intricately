const currencyFormat = (value, toFixed = 0) => Number(value).toFixed(toFixed).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export {
  currencyFormat
}
