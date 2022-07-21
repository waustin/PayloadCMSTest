import { Block } from "payload/types";

const  CTATextBlock:Block = {
  slug: 'cta-text-block',
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'copy',
      type: 'richText'
    }
  ]
}

export default CTATextBlock;