import { client } from "@/lib/sanity"
import { simplifiedProduct } from "@/lib/types"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const getNewProducts = async () => {
    const query = `*[_type == 'product'][0...4] | order(_createAt desc) {
        _id,
          price, 
          name, 
          "slug": slug.current, 
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

      const data = await client.fetch(query)
      console.log(data)

      return data
}


const Newest = async () => {
 const data: simplifiedProduct[] = await getNewProducts()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900" >
                    New Arrivals
                </h2>

                <Link href='/all' className="text-primary flex items-center gap-x-1">
                    Explore
                    <span><ArrowRight /></span>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Newest
