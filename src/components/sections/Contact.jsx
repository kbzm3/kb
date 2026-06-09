import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder (later connect EmailJS/Formspree)
    console.log(form);

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="
  py-28
  bg-white dark:bg-slate-950
  text-slate-900 dark:text-white
  scroll-mt-24
"
    >
      <Container>
        <SectionTitle subtitle="Get in Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-14">
          {/* LEFT SIDE - INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
              Let’s build something meaningful
            </h3>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Whether it’s research collaboration, academic opportunities, or
              web development projects — feel free to reach out.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-slate-300">
              <p>
                📧{" "}
                <span className="text-cyan-400">
                  khursheed.bhat@ddn.upes.ac.in
                </span>
              </p>
              <p>
                📧 <span className="text-cyan-400">ksdbhat999@gmail.com</span>
              </p>

              <p className="flex items-center gap-2">
                <a
                  href="https://wa.me/917006704050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition" />
                </a>

                <span className="text-slate-400">7006704050</span>
              </p>
              <p className="text-slate-400 ">📍 Dehradun, Uttarakhand, India</p>

              <p className="text-slate-400">
                🎓 Assistant Professor | AI Researcher
              </p>
            </div>

            {/* Social Links Placeholder */}
            {/* <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-full
                  border border-white/10
                  text-sm
                  text-slate-700
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-full
                  border border-white/10
                  text-sm
                  text-slate-700
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                LinkedIn
              </a>
            </div> */}
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              p-8
              rounded-2xl
              bg-white/5
              dark:bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              space-y-5
            "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-900/50
                border border-slate-700
                text-white
                outline-none
                focus:border-cyan-400
              "
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-900/50
                border border-slate-700
                text-white
                outline-none
                focus:border-cyan-400
              "
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-900/50
                border border-slate-700
                text-white
                outline-none
                focus:border-cyan-400
              "
              required
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-lg
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                font-medium
                transition
                hover:scale-[1.02]
              "
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
