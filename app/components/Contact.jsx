"use client";

import TextInput, { TextAreaInput } from "./Input";
import Title from "./Title";
import SocialButton from "./SocialButton";
import Reveal from "./Reveal";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/vishnuvinayan/",
      name: "linkedin",
    },
    {
      href: "https://www.facebook.com/therealvishnuvinayan",
      name: "facebook",
    },
    {
      href: "https://www.instagram.com/therealvishnuvinayan/",
      name: "instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCdNylMy26w4UspV80PdOjPQ",
      name: "youtube",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section
      id="contact"
      className="lg:py-20 lg:mb-20 mb-12 py-12 border-b dark:border-gray-700 border-gray-400  border-opacity-50"
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
                  <a href="mailto:khanmonir1335@gmail.com" className="text-xl">
                    therealvishnuvinayan@gmail.com
                  </a>
                }
              />
              <ContactInfo
                title="Phone"
                content={
                  <a href="tel:+971554756468" className="text-xl">
                    +971 554756468
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
            <Reveal from={100}>
              <form
                className="dark:bg-dark bg-white bg-opacity-100 dark:bg-opacity-70 shadow-md rounded px-8 pt-6 pb-8 border dark:border-primary border-gray-200 border-opacity-50 dark:border-opacity-30"
                onSubmit={handleSubmit}
              >
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
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                />
                <TextAreaInput
                  id="message"
                  label="Message"
                  type="text"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required={true}
                />
                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-primary w-full text-lg font-medium py-3"
                    type="submit"
                  >
                    Send Message
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
