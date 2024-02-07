import React from "react";

const ContactForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isDisabled,
}) => {
  return (
    <div className="max-w-sm text-sm lg:max-w-lg lg:text-base">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="mb-2 w-full rounded-lg border bg-transparent p-2 outline-none placeholder:text-white lg:mb-3 lg:p-4"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="mb-2 w-full rounded-lg border bg-transparent p-2 outline-none placeholder:text-white lg:mb-3 lg:p-4"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          name="message"
          className="mb-3 w-full resize-none rounded-lg border bg-transparent p-2 outline-none placeholder:text-white lg:mb-4 lg:p-4"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button
          className="w-full rounded-lg bg-slate-700 p-2 text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500 lg:p-3"
          disabled={isDisabled}
        >
          {isDisabled ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
