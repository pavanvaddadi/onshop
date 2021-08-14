import { initialState } from './cart-state';
import { TestBed } from '@angular/core/testing';
import { CartStore } from './cart-store';

fdescribe('CartStore', () => {

  let store: CartStore;
  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [CartStore]
   
  })
  store = TestBed.inject(CartStore);
})
  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

  it('should add an item to the cart', () => {
      let currentState = initialState;
       expect(currentState.cartItems.length).toEqual(0);
          const cartItem = { 
        id: 1,
        title: 'mobile',
        price: 20,
        description:'samsung',
        category : 'electronics',
        image: './1.jpg',
        quantity: 1,
        totalPrice: 20,
      }

      store.addCartItem(cartItem);

     const expectedState = { cartItems : [cartItem] };
       expect(store.state).toEqual(expectedState);
      // expect(currentState.cartItems.length).toEqual(1);
  });


  it('should clear all the cart items', () => {
   // #region arrange 
   const cartItem = { 
      id: 1,
      title: 'mobile',
      price: 20,
      description:'samsung',
      category : 'electronics',
      image: './1.jpg',
      quantity: 1,
      totalPrice: 20,
    }

    store.addCartItem(cartItem);

    let  currentState = { cartItems : [cartItem] };
     expect(store.state).toEqual(currentState);
  //#endregion

  //#region  Act
     store.clearCart();
  //#endregion

  //#region assertion or expectation
     expect(store.state).toEqual(initialState);
   //#region 
});



it('should restore the cart items', () => {
  // #region arrange 
  let currentState = initialState;
  expect(currentState.cartItems.length).toEqual(0);
     const cartItem = { 
   id: 1,
   title: 'mobile',
   price: 20,
   description:'samsung',
   category : 'electronics',
   image: './1.jpg',
   quantity: 1,
   totalPrice: 20,

 }
 const expectedState = { cartItems : [cartItem] };
//#endregion

 //#region  Act
    store.restoreCart(expectedState);

   
 //#endregion

 //#region assertion or expectation
    expect(store.state).toEqual(expectedState);
  //#region 
});

fit('should delete the cart items', () => {
  // #region arrange 

  let cartItem1 = { 
   id:1,
   title: 'samsung',
   price: 20,
   description:'Mobile',
   category : 'electronics',
   image: './1.jpg',
   quantity: 1,
   totalPrice: 20,

 }
 let cartItem2 = { 
  id:2,
  title: 'Iphone',
  price: 20,
  description:'apple',
  category : 'electronics',
  image: './1.jpg',
  quantity: 1,
  totalPrice: 20,

}

 const currentState = { cartItems : [cartItem1, cartItem2] };

 store.restoreCart(currentState);
 expect(store.state).toEqual(currentState);
//#endregion

 //#region  Act
   store.removeCartItem(cartItem1);

  const expectedState = { cartItems : [cartItem2] };
 //#endregion
  
 //#region assertion or expectation
    expect(store.state).toEqual(expectedState);
  //#region 
});

fit('should update the quantity of selected item', () => {
  // #region arrange 

  const cartItem1 = { 
   id:1,
   title: 'samsung',
   price: 20,
   description:'Mobile',
   category : 'electronics',
   image: './1.jpg',
   quantity: 1,
   totalPrice: 20,
   }

 const itemTobeUpdated = { 
  id:1,
  title: 'samsung',
  price: 20,
  description:'Mobile',
  category : 'electronics',
  image: './1.jpg',
  quantity: 3,
  totalPrice: 60,

}
 

 const currentState = { cartItems : [cartItem1] };

 store.restoreCart(currentState);
 expect(store.state).toEqual(currentState);
//#endregion

 //#region  Act
   store.updateCartItems(itemTobeUpdated);

  const expectedState = { cartItems : [itemTobeUpdated] };
 //#endregion
  
 //#region assertion or expectation
    expect(store.state).toEqual(expectedState);
  //#region 
});


});
