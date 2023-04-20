const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    case "INC":
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case "DEC":
      const tempCart2 = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart2 };
    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (carTotal, carItem) => {
          carTotal.amount += carItem.amount;
          carTotal.total += carItem.price*carItem.amount;
          return carTotal;
        },
        { total: 0, amount: 0 }
      );
      return {...state, total: parseFloat(total.toFixed(2)), amount};
    case "LOADING":
        return {...state, loading: true};
    case "DISPLAY_ITEMS":
        return {...state, loading: false, cart: action.payload};
    default:
      break;
  }

  return state;
};

export default reducer;
