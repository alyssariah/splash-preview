import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Page } from '@/types/Page';
import { BlogPost } from '@/types/BlogPost';
import { Home } from '@/types/Home';
import { About } from '@/types/About';

export async function getBlogPosts(page = 0, offset = 6): Promise<Array<BlogPost>> {
  return client.fetch(
    groq`*[_type=="blog"][${page}...${offset}] | order(_createdAt asc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { page, offset }
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getHomePage(): Promise<Home> {
  return client.fetch(
    groq`*[_type=="home"][0] {
      firstSection,
      selectBlogPosts {
        title,
        blogPosts[]->{_id, _createdAt, name, "slug": slug.current, "image": image.asset->url}
      },
      newsletter
    }`
  );
}

export async function getAboutPage(): Promise<About> {
  return client.fetch(
    groq`*[_type=="about"][0] {
      content[] {
        ...,
        _type == "image" => {
          "imageURL": asset->url
        }
      }
    }`
  );
}

export async function getPages(): Promise<Array<Page>> {
  return client.fetch(
    groq`*[_type=="page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type=="page" && slug.current==$slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
