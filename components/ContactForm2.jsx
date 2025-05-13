import React from "react";

function ContactForm2() {
  return (
    <div className="px-3 mt-62 py-12">
      <div className="w-full flex items-center justify-center md:w-[50%]">
        <form className="w-full flex gap-3 flex-col">
          <div className="px-4">
            <label className="text-md text-slate-500">Name*</label>
            <input
              type="text"
              className="px-4 w-full bg-gray-200 py-4 rounded text-slate-700 outline-0 placeholder:text-gray-400"
              placeholder="please enter your full name"
            />
          </div>
          <div className="px-4">
            <label className="text-md text-slate-500">Phone*</label>
            <input
              type="text"
              className="px-4 w-full bg-gray-200 py-4 rounded text-slate-700 outline-0 placeholder:text-gray-400"
              placeholder="please enter your phone number"
            />
          </div>
          <div className="px-4">
            <label className="text-md text-slate-500">Email*</label>
            <input
              type="text"
              className="px-4 w-full bg-gray-200 py-4 rounded text-slate-700 outline-0 placeholder:text-gray-400"
              placeholder="please enter your email address"
            />
          </div>
          <div className="px-4">
            <label className="text-md text-slate-500">Message</label>
            <textarea
              type="text"
              className="px-4 w-full bg-gray-200 py-4 text-slate-700 resize-none rounded outline-0 placeholder:text-gray-400"
              placeholder="please enter your message"
              rows={3}
            />
          </div>
          <div className="w-full p-4">
            <button
              type="button"
              className="text-white w-full p-3 rounded hover:bg-cyan-900 bg-cyan-800"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm2;
