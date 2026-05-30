import PageBanner from "../../components/shared/PageBanner";
import useTitle from "../../hooks/useTitle";

const Contact = () => {
  useTitle("Contact");

  return (
    <div className="min-h-screen bg-[#071028] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <PageBanner
          title="Contact Us"
          subtitle="We are always ready to help you."
        />

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            backdrop-blur-xl
          "
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-2xl bg-white/10 p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-2xl bg-white/10 p-4 text-white outline-none"
            />

            <textarea
              rows={8}
              placeholder="Your Message"
              className="lg:col-span-2 rounded-2xl bg-white/10 p-4 text-white outline-none"
            />

            <button
              className="
                rounded-2xl
                bg-cyan-500
                px-8
                py-4
                font-semibold
                text-white
              "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;