'use client'
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useShoppingCart } from "use-shopping-cart"


const links = [
    {title:'Home', link: '/'},
    {title:'Men', link: '/Men'},
    {title:'Women', link: '/Women'},
    {title:'Teens', link: '/Teens'},
]


const Navbar = () => {
    const pathname = usePathname() 
    const {handleCartClick} = useShoppingCart()

  return (
<header className="mb-8 border-b">
    <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href='/'>
            <h1 className="text-2xl md:text-4xl font-bold">
                Fashion<span className="text-primary">Wise</span>
            </h1>
        </Link>

        <nav className="hidden lg:flex gap-12 2xl:ml-16">
            {links.map((link, index) => (
                <div key={`Narbar link ${index}`}>
                    {pathname === link.link ? (
                        <Link
                            href={link.link} 
                            className="text-lg font-semibold text-primary"
                        >
                            {link.title}
                        </Link>
                    ): (
                        <Link
                            href={link.link} 
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                        >
                        {link.title}
                        </Link>
                    )}
                </div>
            ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
                <Button  
                onClick={() => handleCartClick()}
                    variant='outline'
                    className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                >
                    <ShoppingBag /> 
                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                </Button>
        </div>
    </div>
</header>
  )
}

export default Navbar
