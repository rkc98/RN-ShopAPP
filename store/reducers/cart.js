import CartItem from "../../models/cart-item";
import { Add_To_Cart } from "../actions/cart";


const initialState={
    items:{

    },
    totalAmount:0
}


export default (state=initialState,action)=>{
    switch (action.type) {
        case Add_To_Cart:
            const addedProduct=action.product;
            const prodPrice=addedProduct.price;
            const prodTitle=addedProduct.title

            if(state.items[addedProduct.id]){
                const updateItem=new CartItem(
                    state.items[addedProduct.id].quantity+1,
                    prodPrice,prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                )
                return {
                    ...state,
                    items:{...state.items,[addedProduct.id]:updateItem},
                    totalAmount:state.totalAmount+prodPrice

                }

            }
            else{
                const newCartItem=new CartItem(1,prodPrice,prodTitle,prodPrice)
                return {
                    ...state,
                    items:{...state.items,[addedProduct.id]:newCartItem},
                    totalAmount:state.totalAmount+prodPrice
                }
            }
            break;
    
        default:
            break;
    }
    return state
}