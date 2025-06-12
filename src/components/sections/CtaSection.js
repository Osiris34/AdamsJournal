import { useState } from "react";
import { SectionHeading } from "#/SectionHeading";

export function CtaSection({ title, description, buttons, ...rest }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        alert(message || "Subscription failed");
        return;
      }

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <section className="bg-base-100 dark:bg-base-900 py-20 md:px-4" {...rest}>
      <div className="container mx-auto px-4 py-10 rounded-3xl">
        <div className="max-w-2xl flex flex-col justify-center items-center mx-auto gap-6">
          <SectionHeading
            align="center"
            title={title}
            description={description}
            buttons={buttons}
          />

          {submitted ? (
            <p className="text-green-500 text-center">Thank you for subscribing!</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
// This component provides a call-to-action section for subscribing to a newsletter.
// It includes a title, description, and a form for email input.
// The form handles submission and displays a success message upon successful subscription.