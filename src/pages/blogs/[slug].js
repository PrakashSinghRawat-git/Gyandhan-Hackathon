import React from 'react'
import BlogPost from '../../components/BlogPost'
import { fetchBlogT1, fetchBlogT1s } from '../../http/UrlAddress';
import axios from 'axios';

function slug({ post, posts }) {

  return (
    <>
      <BlogPost post={post} posts={posts} />
    </>
  )
}


export default slug

export async function getStaticPaths() {
  const posts = await fetchBlogT1s();

  return {
    paths: posts.data.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug
        }
      };
    }),
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const postRes = await fetchBlogT1(params.slug);
  const blogT1s = await fetchBlogT1s();

  return {
    props: {
      post: postRes.data,
      posts: blogT1s.data
    },
  };
}




