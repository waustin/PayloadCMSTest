import { Block } from "payload/types";

const CTAImageTextBlock: Block = {
  slug: "cta-image-text-block",
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "copy",
      type: "richText",
    },
    {
      name: 'imageSide', // required
      type: 'radio', // required
      options: [ // required
        {
          label: 'Left',
          value: 'imageLeft',
        },
        {
          label: 'Right',
          value: 'imageRight',
        },
      ],
      defaultValue: 'imageLeft',
      admin: {
        layout: 'horizontal',
      }
    }
  ],
};

export default CTAImageTextBlock;
