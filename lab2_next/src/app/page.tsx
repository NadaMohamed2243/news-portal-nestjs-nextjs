import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-6 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">News!</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        This is a simple News website.
      </p>
      <Image
        src="/bootique.png"
        alt="Next.js Logo"
        width={220}
        height={220}
        className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </main>
  );
}
