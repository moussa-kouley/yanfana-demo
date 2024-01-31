import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";
import { Clock, Filter, Magic, People } from "~/svgs";
import { type FilterData } from "~/types";
import { FilterSection } from "../macroComponent/Tag";

interface Props {
  filter: FilterData;
  setFilter: React.Dispatch<React.SetStateAction<FilterData>>;
  applyFilter: () => void;
  clearFilter: () => void;
}

const MainBodyHeader: FC<Props> = ({
  filter,
  setFilter,
  applyFilter,
  clearFilter,
}) => {
  const { tab } = useRouter().query;
  const { data: user } = useSession();

  return (
    <>
      <header className="w-full overflow-auto border-b border-border-light pt-2 dark:border-border">
        
        {/* Start of new component  */}


        <>
  {/* component */}
  {/*
  Welcome to Tailwind Play, the official Tailwind CSS playground!

  Everything here works just like it does when you're running Tailwind locally
  with a real build pipeline. You can customize your config file, use features
  like `@apply`, or even add third-party plugins.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know enough to be dangerous. Have fun!
*/}
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <h2 className="mb-4 font-bold text-xl text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
        consequuntur.
      </h2>
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <a
            href=""
            className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
            &nbsp;
          </a>
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src="https://picsum.photos/400/400" alt="" />
            </div>
          </div>
          <div className="bg-white py-4 px-3">
            <h3 className="text-xs mb-2 font-medium">
              Des cadeaux incroyables prêts à être utilisés dans votre prochain
              projet
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div className="relative z-40 flex items-center gap-2">
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
                <a className="text-orange-600 hover:text-blue-500" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


        
        {/* end  of new component  */}
        
        <div className="flex w-full items-end justify-between gap-16 px-2">
          <div className="flex items-center gap-2">
            <Link href="/?tab=personalized">
              <button
                aria-label="icon"
                role="button"
                className={`${tab === undefined || tab === "personalized"
                  ? "btn-tab-active"
                  : "btn-tab"
                  }`}
              >
                <Magic
                  className={`h-4 w-4  ${tab === undefined || tab === "personalized"
                    ? "fill-secondary"
                    : "fill-gray-700 dark:fill-text-secondary"
                    }`}
                />

                <span className="text-sm font-semibold">Personalized</span>
              </button>
            </Link>

            {user?.user && (
              <Link href="/?tab=following">
                <button
                  aria-label="icon"
                  role="button"
                  className={`${tab === "following" ? "btn-tab-active" : "btn-tab"
                    }`}
                >
                  <People
                    className={`h-4 w-4 fill-none ${tab === "following"
                      ? "stroke-secondary"
                      : "stroke-gray-700 dark:stroke-text-secondary"
                      }`}
                  />

                  <span className="text-sm font-semibold">Following</span>
                </button>
              </Link>
            )}

            <Link href="/?tab=latest">
              <button
                aria-label="icon"
                role="button"
                className={`${tab === "latest" ? "btn-tab-active" : "btn-tab"}`}
              >
                <Clock
                  className={`h-4 w-4 fill-none ${tab === "latest"
                    ? "stroke-secondary"
                    : "stroke-gray-700 dark:stroke-text-secondary"
                    }`}
                />

                <span className="text-sm font-semibold">Latest</span>
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                setFilter((prev) => ({
                  ...prev,
                  status: !prev.status,
                }));
              }}
              className="btn-tab cursor-pointer"
            >
              <button
                aria-label="icon"
                role="button"
                className="relative flex items-center justify-center"
              >
                <Filter
                  className={`h-4 w-4 ${filter.data.read_time !== null ||
                    filter.data.tags.length > 0
                    ? "fill-secondary stroke-secondary"
                    : ""
                    } fill-gray-700 dark:fill-text-secondary`}
                />
              </button>

              <span
                className={`${filter.data.read_time !== null || filter.data.tags.length > 0
                  ? "text-secondary"
                  : "text-gray-700 dark:text-text-secondary"
                  }`}
              >
                Filter
              </span>
            </div>
          </div>
        </div>
      </header>

      {filter.status && (
        <FilterSection
          filter={filter}
          setFilter={setFilter}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
      )}
    </>
  );
};

export default MainBodyHeader;
