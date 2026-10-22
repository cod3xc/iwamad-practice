import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">404</h2>
      <p className="text-sm text-gray-500 mb-6">Page not found</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
};