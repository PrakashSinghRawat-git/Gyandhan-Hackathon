
import React from "react";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import ImageGallery from "../components/cards/ImageGallery";
import Card3 from "../components/cards/Card3";
import Card4 from "../components/cards/Card4";
import Link from "next/link";
import { fetchBlogT1s } from "../http/UrlAddress";
import EMICalculator from "@/components/utils/EmiCalculater";
import Contact from "./Contact";


function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          {posts.data.map((post) => {
            return <Card1 key={post.id} post={post} />
          })}
        </div>
      </div>

          <EMICalculator/>

          <Contact/>

    </>
  );
}

export default Home;

export async function getStaticProps(context) {
  const blogT1s = await fetchBlogT1s();


  return {
    props: {
      posts: blogT1s.data
    },
  };
}


