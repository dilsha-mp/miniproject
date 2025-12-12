export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center py-12 px-4">

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
          Contact Us
        </h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left: Contact Info */}
          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl flex flex-col justify-center shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">
              Get in Touch
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Email:</strong> support@foodway.com
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Address:</strong> 123 FoodWay Street, City, Country
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-orange-200 dark:border-orange-700 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-200
                focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-200
                focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium 
                hover:bg-orange-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
