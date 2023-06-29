import { PortableTextBlock } from 'sanity';
import { CallToAction } from './CallToAction';

export type Home = {
  subheading: string;
  firstSection: {
    subheading: string;
    heading: string;
    tagline: string;
    callToAction: CallToAction;
  };
  selectBlogPosts: {
    title: string;
    blogPosts: BlogPosts[];
  };
  newsletter: {
    title: string;
    callToAction: CallToAction;
  };
};

export type BlogPosts = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
