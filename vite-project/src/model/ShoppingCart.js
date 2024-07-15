import getId from "../utils/getId";
import CartItem from "./CartItem";
/** FEEDBACK: Killed it here!!!! */
class ShoppingCart {
  static #allCarts = []
  #cartItems = []

  constructor(item){
    this.id = getId()
    ShoppingCart.#allCarts.push(this)
  }

  createItem(name, price){
    const newItem = new CartItem(name, price) 
    this.#cartItems.push(newItem)
    return newItem
  }
  getItems(){
    return [...this.#cartItems]
  }
  removeItem(id){
    const deleteThis = this.#cartItems.find((item) => item.id === id)
    this.#cartItems.splice(this.#cartItems.indexOf(deleteThis),1)
  }
  getTotal(){
    let total = 0
    this.#cartItems.forEach((item) => total+=item.price)
    return total
  }
  static listAll(){
    return [...ShoppingCart.#allCarts]
  }
  static findBy(id){
    const item = ShoppingCart.#allCarts.find((item) => item.id === id || null)
    return item
  }
}

export default ShoppingCart;