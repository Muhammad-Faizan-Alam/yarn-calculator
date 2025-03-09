import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-5">
      {/* <Image
        src="https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp"
        alt="Coming Soon Animation"
        width={288} // 72 * 4 = 288px
        height={288}
        priority
        className="animate-bounce"
      /> */}
      <div className="text-8xl text-emerald-500 font-bold text-center animate-pulse">Comming Soon!</div>
      <h1 className="text-4xl font-bold text-gray-900 mt-4">Oops! Page Coming Soon 🚀</h1>
      <p className="text-gray-700 text-lg my-4">We&apos;re working on this page. Stay tuned! 🔧</p>
      <Link href="/">
        <span className="mt-5 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}