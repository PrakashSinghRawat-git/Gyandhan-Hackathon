<<<<<<< HEAD
import Card1 from "@/components/cards/Card1";
import Card2 from "@/components/cards/Card2";
import Card3 from "@/components/cards/Card3";
import Card4 from "@/components/cards/Card4";
import ImageGallery from "@/components/cards/ImageGallery";
import Image from "next/image";
import { createClient } from "next-sanity";
import axios from "axios";
import EMICalculator from "@/components/utils/EmiCalculater";

export default function Home({ loans }) {
    console.log(loans);
    return (
        <>
            <div className="py-10">
                <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
                    <Card1 />
                </div>
            </div>


            <EMICalculator/>

            <section className="body-font py-20">
                <div className="px-5 mx-auto max-w-7xl">
                    <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900 text-center">
                        Checkout Our Gallery
                    </h1>
                    <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto text-center">
                        Time is more valuable than money. You can get more
                        money, but you cannot get more time.
                    </p>
                    <div className="flex flex-wrap -m-4 mt-4">
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                    </div>
                </div>
            </section>
=======
import React from "react";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import ImageGallery from "../components/cards/ImageGallery";
import Card3 from "../components/cards/Card3";
import Card4 from "../components/cards/Card4";
import Link from "next/link";
import { fetchBlogT1s } from "../http/UrlAddress";

function Home({posts}) {
  console.log(posts)
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          {posts.data.map((post) => {
            return <Card1 key={post.id} post= {post} />
          })}
        </div>
      </div>

      <section className="body-font py-20">
        <div className="px-5 mx-auto max-w-7xl">
          <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900 text-center">
            Checkout Our Gallery
          </h1>
          <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto text-center">
            "Time is more valuable than money. You can get more money, but you
            cannot get more time.
          </p>
          <div className="flex flex-wrap -m-4 mt-4">
            <Card2 />
          </div>
        </div>
      </section>
>>>>>>> bf9e0496eddc781e3feac1f745d3956b0afc73d9

      <ImageGallery />

<<<<<<< HEAD
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                </div>
            </div>

            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-14">
                <div className="grid gap-10 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                </div>
            </div>
        </>
    );
=======
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <Card3 />
        </div>
      </div>

      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-14">
        <div className="grid gap-10 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <Card4 />
        </div>
      </div>
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
>>>>>>> bf9e0496eddc781e3feac1f745d3956b0afc73d9
}

export async function getStaticProps() {
    const loans = await axios.get(
        "https://ixsnl66w.api.sanity.io/v2021-10-21/data/query/data?query=*%5B_type%20%3D%3D%20%22Loans%22%5D"
    );

    

    return {
        props: {
            loans,
        },
    };
}
/* 
const res = axios.get(
    "https://ixsnl66w.api.sanity.io/v2021-10-21/data/query/data?query=*%5B_type%20%3D%3D%20%22Loans%22%5D"
);
console.log(res); */
