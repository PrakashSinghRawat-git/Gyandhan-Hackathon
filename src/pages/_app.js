import "../styles/globals.css";
import Header from "../components/utils/Header";

import Footer from "../components/utils/Footer";
import  { AppProps } from "next/app";
import { Menu } from "@headlessui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps}/>
      <Footer />
      <Menu as="div" className="fixed top-8 right-10">
          <Menu.Button className=" w-full justify-center rounded-md px-4 py-2 text-sm font-medium dark:text-white hover:bg-opacity-30 ">
            <span className="w-fit">
              <img src="/menu.png" alt="nav icon" className="h-6 w-6" />
            </span>
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute right-0 text-gray-900 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg"
          >
            <Menu.Item
              as="li"
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
            >
              Menu Item 1
            </Menu.Item>
            <Menu.Item
              as="li"
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
            >
              Menu Item 2
            </Menu.Item>
          </Menu.Items>
        </Menu>
    </>
  );
}
