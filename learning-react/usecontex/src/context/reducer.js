export function reducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT":
      const isExisted = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        return state;
      }
      return { ...state, cart: [...state.cart, { ...action.payload }] };

      case "REMOVE_PRODUCT" :
        return {...state, cart: action.payload};
    default:
      return state;
  }
}
