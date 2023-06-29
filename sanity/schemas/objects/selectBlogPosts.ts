const selectBlogPosts = {
  name: 'selectBlogPosts',
  type: 'object',
  title: 'Select Blog Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Blog Posts',
      name: 'blogPosts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
    },
  ],
};

export default selectBlogPosts;
