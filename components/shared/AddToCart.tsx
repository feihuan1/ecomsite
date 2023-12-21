"use client"
import { useShoppingCart } from "use-shopping-cart"
import { Button } from "../ui/button"
import { urlFor } from "@/lib/sanity";

export interface ProductCart {
    name: string; 
    description: string; 
    price: number; 
    currency: string; 
    image: any;
}

const AddToCart = ({currency, description, image, name, price}:ProductCart) => {
    const {addItem, handleCartClick} = useShoppingCart()

    const product = {
        name: name, 
        description: description, 
        price: price, 
        currency: currency, 
        image: urlFor(image).url(), 
        id:'sdfsdfs'
    }

  return (
    <Button onClick={() => {
        addItem(product), handleCartClick()
    } }>
      Add To Cart
    </Button>
  )
}

export default AddToCart
