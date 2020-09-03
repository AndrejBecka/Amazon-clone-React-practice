export const initialState = {
    basket: [{
        id: "12345621",
        title: "Tony Hawks - Pro Skater 1 + 2 Remaster (PS4)",
        price:49.53,
        rating:5,
        image:"https://iczc.cz/6jjuo6q47qi41booh1e89lf9u8-1_7/obrazek"
    },
],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
        // Logic fro adding itom to basket
        return { 
            ...state,
            basket: [...state.basket, action.item],
         };
        break;

        case "REMOVE_FROM_BASKET":
        // Logic for Removing item from basket
        let newBasket = [...state.basket];

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if (index >= 0){
            newBasket.splice(index, 1);            
        } else {
          console.warn(`Cant remove product (id: ${action.id}) as its not in basket`);  
        }
        return { 
            ...state,
            basket: newBasket 
        };
        break;
        
    default:
        return state;
    }
}

export default reducer;

