import {
  FaWhatsapp,
  FaRegEnvelope,
  FaUser,
  FaPhone,
  FaComment,
} from "react-icons/fa";

import { data } from "../../data/data.jsx";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="font-[var(--font-poppins)]"
      style={{ color: "var(--color-title)" }}
    >
      <h2 className="section__title mt-6">Get In Touch</h2>
      <span className="section__subtitle mb-4">Contact Me</span>
      <div className="max-w-6xl mx-auto px-4 py-12 md:pb-2 grid lg:grid-cols-5 gap-6">
        {/* Left Side - Contact Cards */}
        <div className=" space-x-3 md:space-x-0 md:space-y-4 col-span-2 lg:col-span-1 lg:col-start-2 w-full  flex flex-row justify-center items-center md:flex-col">
          {/* WhatsApp Card */}
          <a
            href={`https://api.whatsapp.com/send?phone=${data.contacts.whatsapp.link}&text=Hello, ${data.home.fullName}!`}
            target="_blank"
            className="p-6 rounded-xl flex flex-col items-center justify-center gap-4 w-[150px]  md:w-1/2 lg:w-full"
            style={{
              backgroundColor: "var(--color-container)",
              border: "1px solid hsl(var(--hue), var(--sat), 90%)",
            }}
          >
            <FaWhatsapp
              className="text-2xl"
              style={{ color: "var(--color-title))" }}
            />
            <div>
              <h3
                className="text-lg font-medium mb-1 text-center"
                style={{ color: "var(--color-title)" }}
              >
                WhatsApp
              </h3>
              <p
                className="text-sm  sr-only md:not-sr-only"
                style={{ color: "var(--color-text))" }}
              >
                {data.contacts.whatsapp.link}
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${data.contacts.email.link}`}
            target="_blank"
            className="p-6 rounded-xl flex flex-col items-center gap-4 w-[150px] md:w-1/2 lg:w-full"
            style={{
              backgroundColor: "var(--color-container)",
              border: "1px solid hsl(var(--hue), var(--sat), 90%)",
            }}
          >
            <FaRegEnvelope
              className="text-2xl"
              style={{ color: "var(--color-title))" }}
            />
            <div className="flex items-center flex-col">
              <h3
                className="text-lg font-medium mb-1"
                style={{ color: "var(--color-title)" }}
              >
                Email
              </h3>
              <p
                className="text-xs sr-only md:not-sr-only"
                style={{ color: "var(--color-text))" }}
              >
                {data.contacts.email.link}
              </p>
            </div>
          </a>
          <div className="h-0 md:h-32"></div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="p-8 rounded-xl col-span-2"
          style={{
            backgroundColor: "var(--color-body)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-8"
            style={{ color: "var(--color-title)" }}
          >
            Let's Collab...
          </h2>

          <form
            action={`https://formspree.io/f/${data.contacts.form.key}`}
            method="POST"
            className="space-y-6"
          >
            {/* Name Input */}
            <div className="relative">
              <label
                className="absolute -top-2 left-3 px-1 text-sm"
                style={{
                  backgroundColor: "var(--color-body)",
                  color: "var(--color-text))",
                }}
              >
                <FaUser className="inline mr-1" /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border"
                style={{
                  borderColor: "hsl(var(--hue), var(--sat), 90%)",
                  backgroundColor: "hsl(var(--hue), var(--sat), 98%)",
                }}
              />
            </div>

            {/* Contact Input */}
            <div className="relative">
              <label
                className="absolute -top-2 left-3 px-1 text-sm"
                style={{
                  backgroundColor: "var(--color-body)",
                  color: "var(--color-text))",
                }}
              >
                <FaPhone className="inline mr-1" /> Contact
              </label>
              <input
                name="contact"
                type="text"
                className="w-full px-4 py-3 rounded-xl border"
                style={{
                  borderColor: "hsl(var(--hue), var(--sat), 90%)",
                  backgroundColor: "hsl(var(--hue), var(--sat), 98%)",
                }}
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <label
                className="absolute -top-2 left-3 px-1 text-sm"
                style={{
                  backgroundColor: "var(--color-body)",
                  color: "var(--color-text))",
                }}
              >
                <FaComment className="inline mr-1" /> Message
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-3 rounded-xl border h-32"
                style={{
                  borderColor: "hsl(var(--hue), var(--sat), 90%)",
                  backgroundColor: "hsl(var(--hue), var(--sat), 98%)",
                }}
              />
            </div>

            <button
              type="submit"
              className="button flex-row-center gap-1 text-white"
            >
              <span className="mr-1">Send Message</span>
              <box-icon
                name="paper-plane"
                type="solid"
                color="#f5f4f4"
              ></box-icon>
            </button>

            {/* Add hidden honeypot field for spam protection */}
            <input type="text" name="_gotcha" className="hidden" />
          </form>
        </div>
      </div>
    </section>
  );
};
