import { GlobalConfig } from "payload/types";
import CTAImageTextBlock from "../blocks/CTA-ImageTextBlock";
import CTATextBlock from "../blocks/CTA-TextBlock";
import TestimonialBlock from "../blocks/TestimonialBlock";
import TextBlock from "../blocks/TextBlock";

const HomePage: GlobalConfig = {
  slug: "home-page",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "contentBlocks", // required
      type: "blocks", // required
      minRows: 0,
      maxRows: 20,
      blocks: [
        TextBlock,
        CTAImageTextBlock,
        CTATextBlock,
        TestimonialBlock,
      ],
    },
  ],
};

export default HomePage;