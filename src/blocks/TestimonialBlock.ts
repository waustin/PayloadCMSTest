import { Block } from "payload/types";


const TestimonialBlock:Block = {
  slug: 'testimonial',
  fields: [
    {
      name: 'quote',
      type: 'richText',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}
export default TestimonialBlock;