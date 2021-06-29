import Link from "next/link";
import { useContext } from "react";
import Image from 'next/image'

import SearchBar from "@components/SearchBar";
import { AuthContext } from "src/Context/auth.context";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter()
  const routeHandler = () => {
    router.push("/profile")
  }

  const {isAuthenticated} = useContext(AuthContext)
  console.log(isAuthenticated)

  const profile = (
    <div className="flex cursor-pointer" onClick={routeHandler}>
      <div className="pt-4 mr-2">
        <Image src="/avatar.png" width={30} height={30} className="rounded-full"/>
      </div>
      <span className="pt-4 ml-2 text-lg font-bold">Subrata_Kolay</span>
    </div>
  )
  return (
    <nav className="flex justify-between bg-gray-900 h-14 md:justify-around">
      <Link href="/">
        <a className="pt-3 mx-3">
          <span className="px-2 text-2xl font-extrabold text-black bg-yellow-400 rounded ">
            IMDb
          </span>
        </a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-3 mt-4 text-white rounded cursor-pointer hover:bg-gray-700 lg:hidden md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className="justify-around hidden w-11/12 mx-3 align-middle md:flex">
        <SearchBar />
        {
          isAuthenticated
          ?
          profile
          :
          (
            <Link href="/auth">
              <a className="pt-4 font-bold text-white">SignIn</a>
            </Link>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
