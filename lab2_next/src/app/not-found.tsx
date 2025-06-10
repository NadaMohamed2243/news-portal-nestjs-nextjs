export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The category you’re looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
