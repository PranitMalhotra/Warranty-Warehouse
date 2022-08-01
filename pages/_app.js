import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';
import Logo from "../public/Logomain.png";

function MyApp({ Component, pageProps }) {
  return (
    <div>


      <div className="flex border-b p-2 bg-blue-600 ">
        <div className=" ml-6 mr-4 mt-2">
          <Image src={Logo} alt="Picture of the author"
            width="45px"
            height="45px" />
        </div>

        <div className=" w-1/2 ml-6 mt-3 italic">
          <Link href="/">
            <a className="text-3xl font-bold text-[#f3f4f6]">Warranty Warehouse</a>
          </Link>
        </div>
        <div className="w-1/3  flex justify-end mt-4 ml-6 ">
          <Link href="/">
            <a className="ml-6 text-[#f3f4f6]">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="ml-6 text-[#f3f4f6]">Create Warranty</a>
          </Link>
          <Link href="/my-assets">
            <a className="ml-6 text-[#f3f4f6]">My Warranties</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="ml-6 text-[#f3f4f6]">Warranties Issued</a>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </div>

  );
}
export default MyApp;