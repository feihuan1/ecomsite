import ImageGallery from "@/components/shared/ImageGallery";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { fullProduct } from "@/lib/types";
import { Star } from "lucide-react";

async function getItemBySlug(slug: string) {
  const query = `*[_type=="product" && slug.current == "${slug}"][0] {
    _id,
      images, 
      price, 
      name, 
      description, 
      "slug": slug.current, 
      "categoryName": category->name,
  }`;

  const data = await client.fetch(query);

  console.log(data);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getItemBySlug(params.slug);

  return (
    <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images} /> 

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {data.categoryName}
                </span> 
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                  <Button className="rounded-full gap-x-2">
                    <span className="text-sm">4.2</span> 
                    <Star className="h-4 w-4"/>
                  </Button> 

                  <span className="text-sm text-gray-500 transition duration-100">
                    56 Ratings
                  </span>
              </div>

              <div className="mb-4">
                  <div className="flex items-end gap-2">
                      <span className="text-xl font-bold text-gray-800 md:text-2xl">
                        ${data.price}
                      </span>

                      <span className="mb-0.5 text-red-500 line-through">
                          ${Math.floor(data.price * 1.3)}
                      </span>
                  </div>

                  <span className="text-sm text-gray-500">
                     Plus tax&shipping
                  </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default page;
