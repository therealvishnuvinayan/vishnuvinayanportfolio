"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import TextInput, { TextAreaInput } from "./Input";
import Title from "./Title";
import SocialButton from "./SocialButton";
import Reveal from "./Reveal";

function ContactInfo({ title, content }) {
  return (
    <Reveal from={50}>
      <div className="h-full flex flex-col justify-center items-center py-4 px-8 border border-primary border-opacity-20 rounded-md dark:bg-dark">
        <h4 className="text-2xl text-primary font-semibold mb-3">{title}</h4>
        {content}
      </div>
    </Reveal>
  );
}

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // honeypot to reduce bots (left blank by humans)
    company: "",
  });

  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | success | error | sending

  const socialLinks = [
    { href: "https://www.linkedin.com/in/vishnuvinayan/", name: "linkedin" },
    { href: "https://www.facebook.com/therealvishnuvinayan", name: "facebook" },
    { href: "https://www.instagram.com/therealvishnuvinayan/", name: "instagram" },
    { href: "https://www.youtube.com/channel/UCdNylMy26w4UspV80PdOjPQ", name: "youtube" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const clearBannerSoon = () =>
    setTimeout(() => setStatus({ state: "idle", msg: "" }), 2500);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, company } = formData;

    // Honeypot: if 'company' is filled, treat as bot and silently succeed
    if (company.trim().length > 0) {
      setStatus({ state: "success", msg: "Message sent!" });
      clearBannerSoon();
      setFormData({ name: "", email: "", message: "", company: "" });
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ state: "error", msg: "Please fill all required fields." });
      clearBannerSoon();
      return;
    }

    setStatus({ state: "sending", msg: "Sending..." });

    // Map to the EXACT variable names your EmailJS template uses
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setStatus({ state: "success", msg: "Message sent. I’ll get back to you soon!" });
      clearBannerSoon();
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        state: "error",
        msg: "Could not send right now. Please try again in a moment.",
      });
      clearBannerSoon();
    }
  };

  return (
    <section
      id="contact"
      className="lg:py-20 lg:mb-20 mb-12 py-12 border-b dark:border-gray-700 border-gray-400 border-opacity-50"
    >
      <div className="container">
        {/* TITLE START */}
        <Title subTitle="Get in Touch" title="Ready to Collaborate?" />
        {/* TITLE END */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold mb-8">Contact Details</h2>
            <div className="space-y-4 text-center">
              <ContactInfo
                title="Address"
                content={<p className="text-xl">Dubai, United Arab Emirates</p>}
              />
              <ContactInfo
                title="Email"
                content={
                  <a
                    href="mailto:therealvishnuvinayan@gmail.com"
                    className="text-xl"
                  >
                    therealvishnuvinayan@gmail.com
                  </a>
                }
              />
              <ContactInfo
                title="Phone"
                content={
                  <a href="tel:+971554756468" className="text-xl">
                    +971 55 475 6468
                  </a>
                }
              />
              <ContactInfo
                title="Social Media"
                content={
                  <ul className="flex items-center gap-3 flex-wrap">
                    {socialLinks.map((link, i) => (
                      <SocialButton
                        key={i}
                        icon={link?.icon}
                        href={link?.href}
                        name={link?.name}
                        i={i}
                      />
                    ))}
                  </ul>
                }
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2 className="text-3xl font-semibold mb-8">Let's Talk Now</h2>

            {/* Status banner */}
            {status.state !== "idle" && (
              <div
                className={`mb-4 rounded-md px-4 py-3 text-sm ${status.state === "success"
                  ? "bg-green-500/10 text-green-400 border border-green-500/30"
                  : status.state === "error"
                    ? "bg-red-500/10 text-red-400 border border-red-500/30"
                    : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  }`}
              >
                {status.msg}
              </div>
            )}

            <Reveal from={100}>
              <form
                className="dark:bg-dark bg-white bg-opacity-100 dark:bg-opacity-70 shadow-md rounded px-8 pt-6 pb-8 border dark:border-primary border-gray-200 border-opacity-50 dark:border-opacity-30"
                onSubmit={handleSubmit}
              >
                {/* Honeypot (hidden) */}
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />

                <TextInput
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required={true}
                />
                <TextInput
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                />
                <TextAreaInput
                  id="message"
                  label="Message"
                  type="text"
                  placeholder="Tell me a bit about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required={true}
                />

                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-primary w-full text-lg font-medium py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status.state === "sending"}
                  >
                    {status.state === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
