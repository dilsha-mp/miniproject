export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 px-4">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left: Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:support@foodway.com"
                className="text-orange-600 font-medium hover:underline"
              >
                support@foodway.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+919999999999"
                className="text-orange-600 font-medium hover:underline"
              >
                +91 99999 99999
              </a>
            </p>

            <div>
              <p className="font-semibold mb-1">Our Outlets:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>FoodWay – Downtown, Mumbai</li>
                <li>FoodWay – Central, Delhi</li>
                <li>FoodWay – West End, Bangalore</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 p-6 rounded-xl border border-orange-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Visit Us
          </h2>

          <iframe
            title="FoodWay Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.7974442493205!2d77.59456231483009!3d12.971598990854044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a4b7e36f%3A0xc0c1f6f65e7e0bc3!2sBangalore!5e0!3m2!1sen!2sin!4v1696950012345!5m2!1sen!2sin"
            className="w-full h-64 rounded-xl border border-orange-300"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
