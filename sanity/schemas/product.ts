export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        // give it option to upload image
        of: [{type: 'image'}]
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of Product'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        // let it generage slug by name
        options:{
          source:'name'
        }
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'category',
        title: 'Product Category', 
        type: 'reference', 
        to: [
          {
            type: 'category'
          }
        ]
      }
    ]
  }