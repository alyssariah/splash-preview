import selectBlogPosts from './objects/selectBlogPosts';
import callToAction from './objects/callToAction';

const home = {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'firstSection',
      type: 'object',
      title: 'First Section',
      fields: [
        {
          name: 'subheading',
          type: 'string',
          title: 'Subheading',
        },
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
        },
        {
          name: 'tagline',
          type: 'string',
          title: 'Tagline',
        },
        callToAction,
        // {
        //   name: 'image',
        //   type: 'image',
        //   title: 'Image',
        //   options: {
        //     hotspot: true,
        //   },
        //   fields: [
        //     {
        //       name: 'alt',
        //       type: 'string',
        //       title: 'Alternative text',
        //     },
        //   ],
        // },
      ],
    },
    selectBlogPosts,
    {
      name: 'newsletter',
      type: 'object',
      title: 'Newsletter',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        callToAction,
      ],
    },
  ],
};

export default home;
