import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("your_service_id", "your_template_id", form.current, "your_public_key")
      .then(() => {
        setMessageSent(true);
        form.current.reset();
      })
      .catch(error => console.error("Email failed to send", error));
  };

  return (
    
    <section id="contact" className="w-full py-20 bg-black text-white">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
            Get in touch
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
            You can contact me through the options below or fill out the form to send a message directly.
          </p>

          <div className="mt-6 space-y-4 text-lg">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <a href="mailto:jaindayanshi123@gmail.com" className="text-gray-300 hover:text-yellow-400 transition">
                jaindayanshi123@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaGithub className="text-green-400 text-2xl" />
              <a href="https://github.com/Dayanshi123" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition">
                Dayanshi123
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <a href="https://www.linkedin.com/in/dayanshi-jain" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition">
                Dayanshi Jain
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-r from-[#000405] to-[#000909] p-8 rounded-lg shadow-lg shadow-teal-600 border border-teal-400">
          <h3 className="text-3xl font-semibold text-white mb-6">Send a Message</h3>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 shadow-md"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 shadow-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-yellow-400 shadow-md"
            ></textarea>

            <button type="submit" className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-400 hover:from-red-600 hover:to-yellow-400 text-white font-bold rounded-lg transition shadow-lg">
              Send Message
            </button>
          </form>

          {messageSent && <p className="text-white text-center mt-4">Message Sent Successfully!</p>}
        </div>
      </div>

    </section>

  );
};

export default Contact;
