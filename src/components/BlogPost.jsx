import React from "react";
import Image from "next/image";
import MarkdownIt from "markdown-it";

function BlogPost({ post, posts }) {
    // console.log(posts.data, post);
    const genre = post.data[0].attributes.genre;
    const thumbnailPath = post.data[0].attributes.thmbnail.data.attributes.url;
    const thumbnail = `http://localhost:1337${thumbnailPath}`;
    const authorImagePath = post.data[0].attributes.authorImage.data[0].attributes.url;
    const authorImage = `http://localhost:1337${authorImagePath}`;
    const authorName = post.data[0].attributes.authorName;
    const heading = post.data[0].attributes.heading;
    const content = post.data[0].attributes.content;
    const slug = post.data[0].attributes.slug.toString();

    const md = new MarkdownIt({
        html:true,
    });
    const htmlContent = md.render(content);



    const currentPostId = parseInt(post.data[0].id);

    const postDataArray = [];

    for (var i = 1; i <= posts.data.length; i++) {
        if (i === currentPostId) {
            continue;
        }
        postDataArray.push(posts.data[i]);
    }

    // console.log(postDataArray);



    const remainPost1 = `http://localhost:1337/uploads/pexels_monstera_6289100_d0637b4035.jpg`;
    const remainPost2 = `http://localhost:1337/uploads/pexels_andrea_piacquadio_3760067_d25e44c886.jpg`;
    const remainPost3 = `http://localhost:1337/uploads/pexels_karolina_grabowska_5632382_3aa9808a38.jpg`;
    const remainPost4 = `http://localhost:1337/uploads/pexels_energepiccom_561458_32e31abc50.jpg`;
    const remainPost5 = `http://localhost:1337/uploads/pexels_mikhail_nilov_7731323_7ea6ae9c65.jpg`;
    const remainPost6 = `http://localhost:1337/uploads/pexels_kampus_production_6182096_6f36d710a3.jpg`;
    const remainPost7 = `http://localhost:1337/uploads/pexels_jagmeet_singh_1134857_1_993aefe543.jpg`;
    const remainPost8 = `http://localhost:1337/uploads/pexels_pixabay_47047_a1fc542d03.jpg`;
    const remainPost9 = `http://localhost:1337/uploads/pexels_michael_steinberg_321452_6c2ae5a127.jpg`;
    const remainPost10 = `http://localhost:1337/uploads/pexels_mister_fotofreak_6484708_fde32a08f3.jpg`;


    return (
        <div className="font-poppins text-gray-600">
            {/* <!-- main --> */}
            <main class="pt-12 bg-gray-100 pb-12">
                <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                    {/* <!-- left sidebar --> */}
                    <div class="w-3/12 hidden xl:block">
                        {/* <!-- categories --> */}
                        <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Loans
                            </h3>
                            <div class="space-y-2">
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Home</span>
                                    <p class="ml-auto font-normal">(12)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Business</span>
                                    <p class="ml-auto font-normal">(15)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Auto</span>
                                    <p class="ml-auto font-normal">(5)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Personal</span>
                                    <p class="ml-auto font-normal">(10)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Education</span>
                                    <p class="ml-auto font-normal">(3)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Gold</span>
                                    <p class="ml-auto font-normal">(7)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Property</span>
                                    <p class="ml-auto font-normal">(0)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Secured</span>
                                    <p class="ml-auto font-normal">(13)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>PayDay</span>
                                    <p class="ml-auto font-normal">(7)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Agriculture</span>
                                    <p class="ml-auto font-normal">(17)</p>
                                </a>
                            </div>
                        </div>

                        {/* <!-- random posts --> */}
                        <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Latest Updates
                            </h3>
                            <div class="space-y-4">
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost1}
                                            class="h-14 w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        India's Growth To Slow To 6.4% In 2023-24: Asian Development Bank
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 5, 2023
                                        </div>
                                    </div>
                                </a>
                                <a class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost2}
                                            class="h-14 w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        World Bank Cuts India's Growth Forecast For 2023-24 To 6.3%
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 4, 2023
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost3}
                                            class="h-14 w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        Centre May Consider Importing Butter, Ghee Amid Stagnant Milk Output
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            Aprile 5, 2023
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main content --> */}
                    <div class="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                        {/* <!-- title --> */}
                        <div class="flex bg-white px-3 py-2 justify-between items-center rounded-sm mb-5">
                            <h5 class="text-base uppercase font-semibold font-roboto">
                                {authorName}
                            </h5>
                            <a class="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                                see more
                            </a>
                        </div>

                        {/* <!-- big post --> */}
                        <div class="rounded-sm overflow-hidden bg-white shadow-sm">
                            <a href="view.html" class="block rounded-md overflow-hidden">
                                <img
                                    src={thumbnail}
                                    class="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
                                />
                            </a>
                            <div class="p-4 pb-5">
                                <a href="view.html">
                                    <h2 class="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                        {heading}
                                    </h2>
                                </a>

                                <section
                                    className="text-gray-500 text-sm mt-2"
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                ></section>

                                <div class="mt-3 flex space-x-4">
                                    <div class="flex text-gray-400 text-sm items-center">
                                        <span class="mr-2 text-xs">
                                            <i class="far fa-user"></i>
                                        </span>
                                        Blogging Tips
                                    </div>
                                    <div class="flex text-gray-400 text-sm items-center">
                                        <span class="mr-2 text-xs">
                                            <i class="far fa-clock"></i>
                                        </span>
                                        June 11, 2021
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- regular post --> */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a href="#" class="block rounded-md overflow-hidden">
                                    <img
                                        src={remainPost4}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                           Get in touch with our Experts to get Financial Mentorship
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-user"></i>
                                            </span>
                                            Feature Coming Soon
                                        </div>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 5, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a href="#" class="block rounded-md overflow-hidden">
                                    <img
                                        src={remainPost5}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Early Access to Premium Course on Finance 
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-user"></i>
                                            </span>
                                            Coming Soon
                                        </div>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 5, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a href="#" class="block rounded-md overflow-hidden">
                                    <img
                                        src={remainPost6}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                           Join our Newsletter to get Latest updates about loan schemes and latest Finance News.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-user"></i>
                                            </span>
                                            Feature Coming Soon
                                        </div>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 5,2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a href="#" class="block rounded-md overflow-hidden">
                                    <img
                                        src={remainPost7}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Check out our latest AI-generated budgeting tool which gives you alerts and helpful tips on saving your salary.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-user"></i>
                                            </span>
                                            Feature Coming Soon
                                        </div>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-2 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 5,2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- right sidebar --> */}
                    <div class="lg:w-3/12 w-full mt-8 lg:mt-0">
                        {/* <!-- Social plugin --> */}
                        <div class="w-full bg-white shadow-sm rounded-sm p-4 ">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Social Plugin
                            </h3>
                            <div class="flex gap-2">
                                <a
                                    href="#"
                                    class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                                >
                                    <i class="fab fa-pinterest-p"></i>
                                </a>
                                <a
                                    href="#"
                                    class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                                >
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Popular posts --> */}
                        <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Popular Posts
                            </h3>
                            <div class="space-y-4">
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost8}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        Nifty, Sensex Close Higher Aided By IT Stocks Ahead Of RBI Rate Decision

                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                             April 6, 2023
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost9}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        India's Services Growth Slows In March, Input Cost Inflation Declines

                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            April 6, 2023
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <img
                                            src={remainPost10}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                        PhonePe Launches E-Commerce App Pincode On Open Network
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            Aprile 5, 2023
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- tag --> */}
                        {/* <!-- categories --> */}
                        <div class="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Tags
                            </h3>
                            <div class="flex items-center flex-wrap gap-2">
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Car
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Business
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Personal
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Finance
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Gold
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Property
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Secured
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BlogPost;
