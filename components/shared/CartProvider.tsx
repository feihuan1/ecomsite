"use client"

import { ReactNode } from "react"
import { CartProvider as Provider } from "use-shopping-cart"

const CartProvider = ({children}: {children: ReactNode}) => {
  
  return (
    <Provider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string} 
        successUrl="https://ecomsite-bp7zyn4gl-pengfeihuans-projects.vercel.app/payment/success" 
        cancelUrl="https://ecomsite-bp7zyn4gl-pengfeihuans-projects.vercel.app/payment/error" 
        currency="USD" 
        billingAddressCollection={false} 
        // shopping cart will persist in local storage
        shouldPersist={true} 
        language="en-US"
    >
        {children}
    </Provider>
  )
}

export default CartProvider
