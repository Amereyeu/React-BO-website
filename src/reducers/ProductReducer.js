import { v4 as uuidv4 } from "uuid";

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        product: [
          ...state.product,
          {
            userName: action.product.userName,
            text: action.product.text,
            id: uuidv4().slice(0, 4),
          },
        ],
      };

    case "EDIT_POST":
      const updatedProduct = action.payload;

      const updatedProducts = state.product.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });

      return {
        ...state,
        product: updatedProducts,
      };

    case "REMOVE_POST":
      return {
        ...state,
        product: state.product.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};
