import { CartItem } from './cart-item';
import { CartState, initialState } from './cart-state';
import { Injectable } from "@angular/core";
import { Store } from '../store';

@Injectable({providedIn:'root'})
export class CartStore extends Store<CartState>{
  
    
     constructor() {
        super(initialState);
     }

    public addCartItem(cartItemToAdd : CartItem) {
        const newState = { ...this.state, 
            cartItems: [].concat(this.state.cartItems, cartItemToAdd)
        }
         this.setState(newState)
        
    }

    public clearCart() {
        
         this.setState(initialState)
        
    }

    removeCartItem(removeItem: CartItem) {
         console.log(' start [cart] removeCartItem method') 
        const newState= { ...this.state,
            cartItems: this.state.cartItems.filter((eachItem) => {
                  return eachItem.id != removeItem.id;     
            })
        }
            this.setState(newState); 
      }

    restoreCart(cartItem) {
        this.setState(cartItem)
      }


      updateCartItems(itemTobeUpdated : CartItem) {
        console.log(' start [cart] updateCartItems method')  
        
        const newState =  {
            ...this.state,
            cartItems: this.state.cartItems.map( 
                eachItem => 
                eachItem.id == itemTobeUpdated.id ?
                itemTobeUpdated : eachItem)
        }
        this.setState(newState);
      }
   

}
