import React from "react";

export const OverlapWrapper = () => {
  return (
    <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-0">
      {/* Left Contact Info Box */}
      <div className="bg-blue-700 text-white rounded-l-2xl p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-6 text-blue-100">
            Say something to start a live chat!
          </p>
          <ul className="space-y-4">
            <li>
              📞 <span className="ml-2">+1 (234) 567-890</span>
            </li>
            <li>
              ✉️ <span className="ml-2">support@example.com</span>
            </li>
            <li>
              📍{" "}
              <span className="ml-2">
                123 Dartmouth street, massachusetts, United States
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Form Box */}
      <div className="bg-white rounded-r-2xl p-8 flex flex-col justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          {/* Optional heading */}
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg p-3 
                         focus:ring-2 focus:ring-purple-600 focus:outline-none
                         placeholder-black text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 
                         focus:ring-2 focus:ring-purple-600 focus:outline-none
                         placeholder-black text-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 
                         focus:ring-2 focus:ring-purple-600 focus:outline-none
                         placeholder-black text-black"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
