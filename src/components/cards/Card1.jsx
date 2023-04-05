import Link from "next/link";
import React from "react";
import Image from "next/image";

function Card1() {
    const genre = "deveolpment";
    const thumbnail = "https://picsum.photos/200/300";
    const authorImage = "https://picsum.photos/id/237/200/300";
    const authorName = "Dilshad";
    const heading = "let's talk about money";
    

    return (
        <>
            <div>
                <div className="relative">
                    <Image
                        className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top object-cover"
                        alt="thumbnail"
                        width={100}
                        height={100}
                        src={thumbnail}
                    />

                    <div className="absolute right-3 left-3 bottom-3">
                        <span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                            {genre}
                        </span>
                        <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-white">
                            <div className="flex items-center">
                                <Image
                                    className="w-10 h-10 rounded-full mr-3"
                                    src={authorImage}
                                    alt="author image"
                                    width={100}
                                    height={100}
                                />
                                <p className="uppercase text-sm">
                                    {authorName}
                                </p>
                            </div>
                            <h1 className="text-xl font-semibold text-black mb-4 mt-22xl:text-2xl">
                                {heading}
                            </h1>
                            <Link
                                className="flex items-center gap-x-1.5"
                                href={`/blogs/slug`}
                            >
                                Read more
                                <span>
                                    <div
                                        style={{
                                            fontSize: "inherit",
                                            color: "inherit",
                                            padding: "2px",
                                        }}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 256 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                        </svg>
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card1;
