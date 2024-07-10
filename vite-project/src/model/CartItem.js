import getId from "../utils/getId";

class CartItem {
  constructor(name,price = 0){
    this.id = getId()
    this.name = name
    this.price = price
  }


}

export default CartItem;