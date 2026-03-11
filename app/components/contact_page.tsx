"use client";
import React from "react";

interface ContactFormProps {
  formId: string;
  inputClassName?: string;
  textAreaClassName?: string;
  buttonClassName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formId,
  inputClassName = "px-4 py-2 border border-neutral-700 rounded-md text-neutral-300 bg-neutral-900 focus:outline-none focus:border-blue-500",
  textAreaClassName = "px-4 py-2 border border-neutral-700 rounded-md text-neutral-300 bg-neutral-900 focus:outline-none focus:border-blue-500 resize-none",
  buttonClassName = "w-full py-2.5 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300",
}) => {
  return (
    <form
      action={`https://formspree.io/f/${formId}`}
      method="POST"
      target="_top"
      className="flex flex-col space-y-6 w-full max-w-lg mx-auto p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-semibold text-neutral-300">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClassName} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-semibold text-neutral-300">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClassName} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="number" className="mb-2 font-semibold text-neutral-300">
          Phone
        </label>
        <input id="number" name="number" type="text" className={inputClassName} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-semibold text-neutral-300">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required className={textAreaClassName}></textarea>
      </div>

      <button type="submit" className={buttonClassName}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
