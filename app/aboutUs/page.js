/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ContactAndAbout() {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-background-black text-title-gray">
      <div className="p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-light text-title-gray p-2 rounded-md hover:bg-title-gray hover:text-orange-light transition-colors"
          >
            Send
          </button>
        </form>
      </div>
      <div className="p-8 mt-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>
        <p className="mb-4 text-content-gray">
          Hi there! I'm Ali Rıza Durak, a passionate developer and lifelong
          learner. I love building things that make a difference. When I'm not
          coding, you can find me exploring new technologies, reading, or
          enjoying a good cup of coffee.
        </p>
        <p className="mb-4 text-content-gray">
          I'm always excited to collaborate on new projects and connect with
          fellow developers. Feel free to reach out and let's create something
          amazing together!
        </p>
        <div className="mb-4 text-orange-light">
          <p>Address: 123 Main Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-content-gray">
            Back to
            <Link href="/" className="text-orange-light hover:underline">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
