import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-5">
      <img
        src="https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp"
        alt="Coming Soon Animation"
        className="w-72 h-72"
      />
      <h1 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page Coming Soon 🚀</h1>
      <p className="text-gray-600 text-lg mt-2">
        We're working on this page. Stay tuned! 🔧
      </p>
      <Link href="/">
        <button className="mt-5 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}