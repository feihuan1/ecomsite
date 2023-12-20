import { ReactNode } from "react"
import { CartProvider as Provider } from "use-shopping-cart"

const CartProvider = ({children}: {children: ReactNode}) => {
  return (
    <Provider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string} 
        successUrl="http://localhost:3000/success" 
        cancelUrl="http://localhost:3000/error" 
        currency="USD" 
        billingAddressCollection={true} 
        // shopping cart will persist in local storage
        shouldPersist={true} 
        language="en-US"
    >
        {children}
    </Provider>
  )
}

export default CartProvider
