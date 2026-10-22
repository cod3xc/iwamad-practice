export const ContactPage = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Me</h2>
      <p className="text-sm text-gray-600 mb-4">Feel free to reach out via email:</p>
      <a
        href="mailto:a_alisher@kbtu.kz"
        className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
      >
        a_alisher@kbtu.kz
      </a>
    </div>
  );
};