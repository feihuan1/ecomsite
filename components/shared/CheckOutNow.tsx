"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { ProductCart } from "@/lib/types";
import { useShoppingCart } from "use-shopping-cart";




export default function Checkoutnow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string){
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id)
      }}
    >
      Checkout Now
    </Button>
  );
}