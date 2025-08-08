import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw7B3DJHa6g2RkgZai6hf_l7xOHTPb6BdpJodGcnFzXtCp2pMc3ULaKyDVXcdU6fU51zw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      console.log("Success!", response);
      alert("Form berhasil dikirim!");
      form.reset(); // Reset form setelah submit
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gray-300 dark:bg-gray-800 relative my-pseudo-before pseudo-top-2 py-20 transition"
    >
      <div className="flex flex-col flex-wrap items-center justify-center ">
        <div className="header-section">
          <h2 class="my-heading transition">Contact Me</h2>
          <div class="my-line-heading"></div>
          <p class="my-info px-2 md:w-[43rem] transition">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="w-full md:w-[35rem] lg:w-[40rem] bg-slate-200 dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900 inset-ring-1 inset-ring-sky-300 dark:inset-ring-blue-950 px-6 py-4 transition">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            name="submit-to-google-sheet"
            className="w-full flex flex-col flex-wrap space-y-4"
          >
            <label
              htmlFor="Name"
              className="text-base font-semibold text-slate-900 dark:text-white my-2"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              placeholder="enter your name...."
              className="bg-gray-50 dark:bg-gray-600 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition"
            />
            <label
              htmlFor="Email"
              className="text-base font-semibold text-slate-900 dark:text-white my-2"
            >
              Email
            </label>
            <input
              type="text"
              name="Email"
              placeholder="enter your email...."
              className="bg-gray-50 dark:bg-gray-600 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition"
            />
            <label
              htmlFor="Message"
              className="text-base font-semibold text-slate-900 dark:text-white my-2"
            >
              Massage
            </label>
            <textarea
              name="Message"
              placeholder="Write your massage...."
              className="bg-gray-50 dark:bg-gray-600 rounded-md px-3 py-2 border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 resize-none transition"
            ></textarea>
            <button type="submit" className="my-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
