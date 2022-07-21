
import { Block } from "payload/types";

const TextBlock: Block = {
  slug: "text-block",
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
}

export default TextBlock;