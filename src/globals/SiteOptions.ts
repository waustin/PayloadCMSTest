import { GlobalConfig } from "payload/types";

const SiteOptions: GlobalConfig = {
  slug: 'site-options',
  fields: [
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text'
        },
        {
          name: 'phone',
          type: 'text'
        },
        {
          name: 'email',
          type: 'text'
        }
      ]
    }
  ],
}

export default SiteOptions;