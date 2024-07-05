import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto w-[90%] bg-[url(../public/cheshm2.webp)] bg-no-repeat bg-center bg-cover rounded-3xl h-[20rem] mb-6 mt-9 hover:w-[95%] transition-all"></div>

      <section className="mb-10 w-[90%] text-center sm:mb-10 sm:px-0">
        <h2 className="mb-2 text-4xl font-medium text-black">Contact Us</h2>

        <p className="text-[1.2rem] text-black leading-[1.5rem] text-center">
          Please contact us directly at
          <a href="mailto:example@gmail.com"> example@gmail.com </a>
          or through this form.
        </p>

        <form className="mt-10 flex flex-col rounded-2xl text-black">
          <input
            type="email"
            name="senderEmail"
            className="h-14 bg-[#ece2d0] border border-solid border-black rounded-lg px-4 placeholder:text-black outline-none"
            placeholder="Your email"
            maxLength={500}
            required
          />
          <textarea
            name="message"
            className="my-3 h-52 bg-[#ece2d0] border border-solid border-black rounded-lg p-4 placeholder:text-black outline-none"
            placeholder="Your message"
            maxLength={5000}
            required
          />
          <button className="bg-black min-h-[2rem] min-w-[3rem] max-w-[5rem] rounded-lg p-3 text-[#ece2d0] flex justify-center items-center hover:bg-[#6d6d6d] hover:text-black transition-all">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
