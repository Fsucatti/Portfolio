"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   // Env var
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // Env var
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!    // Env var
      )
      .then(
        () => {
          setLoading(false)
          setSuccess("Message sent successfully ✅")
        },
        (error) => {
          setLoading(false)
          setSuccess("Failed to send message ❌")
          console.error(error)
        }
      )
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-sky-900 to-black text-white px-8 py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left column - Contact form */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6 
                       bg-gradient-to-r from-indigo-400 via-teal-300 to-yellow-400 
                       bg-clip-text text-transparent drop-shadow-lg"
          >
            Contact Me
          </motion.h1>
          <p className="text-gray-300 mb-8">
            Feel free to reach out using the form below. Whether it’s a project idea, a question, or just to say hello, I’d love to hear from you.
          </p>

          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="px-6 py-3 border border-teal-400 text-teal-400 rounded-lg bg-transparent hover:bg-teal-400 hover:text-black transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mt-6 p-3 rounded-lg text-center font-medium 
                          ${success.includes("✅") ? "bg-green-500/20 text-green-300 border border-green-400/50" 
                                                  : "bg-red-500/20 text-red-300 border border-red-400/50"}`}
            >
              {success}
            </motion.div>
          )}
        </div>

        {/* Right column - Google Maps with info overlay */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.63932453793!2d-58.43708875!3d-34.608418349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7f5dcf6f3f%3A0x9a58c7f2f436c2e6!2sBuenos%20Aires%20City%20Autonomous%20Capital%20Federal!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Info overlay */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-gray-600 text-sm">
            <h2 className="text-lg font-bold text-teal-300">Francisco Sucatti</h2>
            <p className="text-gray-300">Argentina, Buenos Aires (CABA)</p>
            <a
            href="mailto:fsucatti@gmail.com"
            className="text-indigo-400 hover:underline"
            >
            fsucatti@gmail.com
            </a>
            <br />
            <span className="text-green-300">linkedin.com/in/fsucatti</span>
        </div>
        </div>

      </div>
    </div>
  )
}

