import React from "react";
import Image from "next/image";
/* import MarkdownIt from "markdown-it"; */

function BlogPost() {
    // console.log(posts.data, post);
    const genre = "dev";
    const thumbnail = "https://picsum.photos/200";
    const authorImage = "https://picsum.photos/200";
    /* const authorImage = `http://localhost:1337${authorImagePath}`; */
    const authorName = "Dilshad";
    const heading = "let's talk about money";
    const content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda? Voluptatibus corporis commodi, minima repudiandae accusamus unde nostrum nesciunt fuga, saepe iusto voluptate quaerat at repellat provident sapiente? Dolor saepe ratione ipsam perspiciatis culpa vero quis, amet facilis cupiditate tenetur excepturi ducimus itaque quos, corrupti qui iusto, esse similique. Ratione voluptas sed esse recusandae mollitia reprehenderit deserunt alias pariatur dolorem provident quia corrupti tenetur laborum, a magni necessitatibus nemo amet fuga, eos debitis animi accusamus odio. Tenetur non fuga nesciunt eaque minus vitae quidem, perferendis amet quasi iusto nihil officia voluptatibus perspiciatis reiciendis architecto suscipit magni quia hic ad? Nostrum impedit fugit modi ad expedita quidem, qui accusantium illum enim recusandae quaerat doloribus facere, harum aperiam non laborum dolorem quas. Dignissimos dicta soluta voluptate amet aperiam commodi velit ratione hic debitis, ipsa odio fugiat necessitatibus enim reiciendis beatae quas aliquam ab. Autem facere molestiae laboriosam molestias, nesciunt voluptatibus, natus neque doloremque nam non tenetur quae modi tempore debitis, cumque iste accusamus adipisci amet tempora recusandae! Fugiat exercitationem error autem animi, ducimus odio consequatur perspiciatis aliquam numquam temporibus. Cum ducimus cupiditate, ea, molestias, aut sint recusandae quam nisi corrupti necessitatibus velit modi! Facilis molestiae totam explicabo quibusdam. Architecto explicabo aut voluptates, neque placeat ipsa totam sed eius temporibus similique minima, magnam deleniti quasi? Suscipit possimus incidunt distinctio sed, delectus voluptatibus voluptates dignissimos, assumenda doloribus voluptas maiores molestias soluta laudantium. Aperiam tempora magnam deleniti? Perspiciatis cum, voluptatem fugiat dolorum est ad quos nesciunt non. Neque tempore consectetur cumque recusandae! Adipisci, blanditiis natus. Itaque praesentium exercitationem, similique at saepe, blanditiis quasi numquam quo et placeat sunt dolores ab impedit accusantium quis aliquam. Debitis harum incidunt dolores ducimus expedita non ex ut inventore distinctio illo tempora iusto cumque deleniti, ipsum quia! Et quia fugiat deserunt. Expedita debitis commodi perspiciatis consequuntur impedit numquam, amet iure enim qui, eligendi perferendis ratione. Sunt distinctio obcaecati totam quisquam provident excepturi nesciunt id nostrum expedita ad maiores saepe ex nisi architecto voluptatem deleniti maxime quod natus ducimus molestias, perspiciatis incidunt. Blanditiis ipsam nulla eos minima officia expedita nisi? Earum maxime fugit cupiditate! Temporibus delectus eum reiciendis, sequi, tempore odio repudiandae quod nobis, facilis illum ex aliquam alias sed ipsa nemo voluptate quis modi eius veniam provident? Unde, vel debitis suscipit dolor consequuntur tempore asperiores consectetur sit magni totam eos hic deleniti est quod necessitatibus, possimus perspiciatis rem voluptas ut quaerat? Iste eius consequuntur rerum. Repudiandae, quisquam. Unde, debitis doloribus deserunt dolor at neque ratione aut minus autem, amet ut natus adipisci tempore recusandae accusantium quaerat eius quo dicta, beatae exercitationem optio error. Temporibus placeat, nemo exercitationem facilis, rem, qui doloribus mollitia quam corrupti quibusdam neque? Culpa, tempore possimus? Repellat nostrum similique natus itaque doloribus et rerum aliquam dignissimos magnam porro perferendis labore obcaecati, iusto earum, facere sapiente, perspiciatis illum. Laborum quasi dolores iure illum laudantium, placeat dicta, in quis fugiat tempora beatae consequuntur numquam quas eos animi earum doloremque error officia libero maiores dignissimos! Vitae quasi voluptatibus repudiandae alias ratione doloremque quaerat inventore praesentium, ab quidem officia iure voluptates";
    /* const slug = post.data[0].attributes.slug.toString(); */

    /*  const md = new MarkdownIt();
    const htmlContent = md.render(content);

    const currentPostId = parseInt(post.data[0].id);

    const postDataArray = []; */

    /* for (var i = 1; i <= posts.data.length; i++) {
        if (i === currentPostId) {
            continue;
        }
        postDataArray.push(posts.data[i]);
    } */

    // console.log(postDataArray);

    const remainPost1 = "https://picsum.photos/200";
    const remainPost2 = "https://picsum.photos/200";
    const remainPost3 = "https://picsum.photos/200";
    const remainPost4 = "https://picsum.photos/200";
    const remainPost5 = "https://picsum.photos/200";
    const remainPost6 = "https://picsum.photos/200";
    const remainPost7 = "https://picsum.photos/200";
    const remainPost8 = "https://picsum.photos/200";
    const remainPost9 = "https://picsum.photos/200";
    const remainPost10 = "https://picsum.photos/200";

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
                                Categories
                            </h3>
                            <div class="space-y-2">
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Beauti</span>
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
                                    <span>Fashion</span>
                                    <p class="ml-auto font-normal">(5)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Food</span>
                                    <p class="ml-auto font-normal">(10)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Learn</span>
                                    <p class="ml-auto font-normal">(3)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Music</span>
                                    <p class="ml-auto font-normal">(7)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Nature</span>
                                    <p class="ml-auto font-normal">(0)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>People</span>
                                    <p class="ml-auto font-normal">(13)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Sports</span>
                                    <p class="ml-auto font-normal">(7)</p>
                                </a>
                                <a
                                    href="#"
                                    class="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
                                >
                                    <span class="mr-2">
                                        <i class="far fa-folder-open"></i>
                                    </span>
                                    <span>Technology</span>
                                    <p class="ml-auto font-normal">(17)</p>
                                </a>
                            </div>
                        </div>

                        {/* <!-- random posts --> */}
                        <div class="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                            <h3 class="text-xl font-semibold text-gray-700 mb-3 font-roboto">
                                Random Posts
                            </h3>
                            <div class="space-y-4">
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <Image
                                            src={remainPost1}
                                            class="h-14 w-20 rounded object-cover"
                                            height={56}
                                            width={80}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            Team Bitbose geared up to attend
                                            Blockchain
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            June 11, 2021
                                        </div>
                                    </div>
                                </a>
                                <a class="flex group">
                                    <div class="flex-shrink-0">
                                        <Image
                                            src={remainPost2}
                                            class="h-14 w-20 rounded object-cover"
                                            width={80}
                                            height={56}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            After a Caribbean Hurricane, the
                                            Battle
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            March 27, 2021
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <Image
                                            src={remainPost3}
                                            class="h-14 w-20 rounded object-cover"
                                            width={80}
                                            height={56}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            California sheriff’s deputy shot
                                            during ‘ambush’
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            Aprile 17, 2021
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
                            <a
                                href="view.html"
                                class="block rounded-md overflow-hidden"
                            >
                                <Image
                                    src={thumbnail}
                                    class="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
                                    width={100}
                                    height={384}
                                />
                            </a>
                            <div class="p-4 pb-5">
                                <a href="view.html">
                                    <h2 class="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                        {heading}
                                    </h2>
                                </a>

                                {/* <section
                                    className="text-gray-500 text-sm mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: htmlContent,
                                    }}
                                ></section> */}
                                <p>{content}</p>

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
                                <a
                                    href="#"
                                    class="block rounded-md overflow-hidden"
                                >
                                    <Image
                                        src={remainPost4}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                        width={100}
                                        height={240}
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Lorem, ipsum dolor sit amet consec
                                            tetur adipisicing elit.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
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
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a
                                    href="#"
                                    class="block rounded-md overflow-hidden"
                                >
                                    <Image
                                        src={remainPost5}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                        width={100}
                                        height={240}
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Lorem, ipsum dolor sit amet consec
                                            tetur adipisicing elit.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
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
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a
                                    href="#"
                                    class="block rounded-md overflow-hidden"
                                >
                                    <Image
                                        src={remainPost6}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                        width={100}
                                        height={240}
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Lorem, ipsum dolor sit amet consec
                                            tetur adipisicing elit.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
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
                            <div class="rounded-sm bg-white p-4 pb-5 shadow-sm">
                                <a
                                    href="#"
                                    class="block rounded-md overflow-hidden"
                                >
                                    <Image
                                        src={remainPost7}
                                        class="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                                        width={100}
                                        height={240}
                                    />
                                </a>
                                <div class="mt-3">
                                    <a href="#">
                                        <h2 class="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                            Lorem, ipsum dolor sit amet consec
                                            tetur adipisicing elit.
                                        </h2>
                                    </a>
                                    <div class="mt-2 flex space-x-3">
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
                                        <Image
                                            src={remainPost8}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                            height={56}
                                            width={80}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            Team Bitbose geared up to attend
                                            Blockchain
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            June 11, 2021
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <Image
                                            src={remainPost9}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                            height={56}
                                            width={80}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            After a Caribbean Hurricane, the
                                            Battle
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            March 27, 2021
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="flex group">
                                    <div class="flex-shrink-0">
                                        <Image
                                            src={remainPost10}
                                            class="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
                                            height={56}
                                            width={80}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h5 class="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                            California sheriff’s deputy shot
                                            during ‘ambush’
                                        </h5>
                                        <div class="flex text-gray-400 text-sm items-center">
                                            <span class="mr-1 text-xs">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            Aprile 17, 2021
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
                                    Beauti
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Sports
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
                                    Politics
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Computer
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Coding
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Web Design
                                </a>
                                <a
                                    href="#"
                                    class="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                                >
                                    Web App
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
