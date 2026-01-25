import { useState } from "react";
import Heading from "../components/Heading";
import emailjs from '@emailjs/browser';
function Contact() {
  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialFormState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const [contactData, setContactData] = useState<ContactFormData>({...initialFormState});
  
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setContactData(prev => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  emailjs
    .sendForm(
      service_id,
      template_id,
      e.currentTarget,
      {
      publicKey:public_key,
      limitRate:{
      throttle:10000
       }
      })
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert('Your mail is sent!');
        setContactData(initialFormState); 
      },
      (error) => {
        alert('Something went wrong!');
        console.error("Email error:", error.text);
      }
    );
};
  return (
    <div id="contact" className="w-full bg-white">
      <div className="p-8 pt-24 container mx-auto flex-col justify-center items-center max-w-6xl space-y-8 md:p-24">
        <Heading title="Get In Touch" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 space-y-3 md:space-y-0">
          <div className="flex flex-col  space-y-6">
            <div className="">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
            </div>
            <div className="flex flex-col text-gray-700 space-y-4 ">
              <div className="flex items-center hover:text-purple-600 hover:translate-x-1 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail w-5 h-5 text-purple-600 mr-3"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href="mailto:hv9796923@gmail.com">hv9796923@gmail.com</a>
              </div>
              <div className="flex items-center hover:text-purple-600 hover:translate-x-1 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 text-purple-600 mr-3"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a href="https://linkedin.com/in/harshvardhan30">
                  Linkdin Profile
                </a>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github w-5 h-5 text-purple-600 mr-3"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <a href="https://github.com/harshuvar30">Github Profile</a>
              </div>
            </div>
            <div className="text-gray-700 pt-4">
                <p>I am always open to discussing new projects or opportunities, feel free to reach out!</p>
            </div>

          </div>
          <div className="bg-white drop-shadow-xl p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 translate-[1.02] transition-transform duration-300" name="name" value={contactData.name} onChange={handleChange} type="text" required placeholder="Your Name" ></input>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400" name="email" value={contactData.email} onChange={handleChange} type="text" required placeholder="Your Email"></input>
              </div>
            </div>
            <div className="space-y-2 ">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input id="subject" className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none" name="subject" value={contactData.subject} onChange={handleChange} required type="text" placeholder="Subject"></input>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows={5} className="px-3 py-2   w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none placeholder-gray-400 " name="message" value={contactData.message} onChange={handleChange} typeof="text" required placeholder="Your Message"></textarea>
            </div>
            <div className="space-y-2 flex items-center justify-center bg-purple-500 hover:bg-purple-400 text-white w-full py-2 rounded-md hover:cursor-pointer hover:scale-[1.03] translateZ[0px] transition transform   duration-500 ease-in-out">
              
              <button className="w-full hover:cursor-pointer focus:outline-none" type="submit">
                Submit Message              
                </button>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
