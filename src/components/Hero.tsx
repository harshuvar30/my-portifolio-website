function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-gray-50"
    >
      <div className="ontainer mx-auto max-w-6xl relative z-10 bg-gray-50 flex-col justify-center items-center p-24 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex flex-col">
              <div
                className="inline-block text-4xl md:text-5xl font-bold tracking-tight"
                style={{ opacity: 1 }}
              >
                <span
                  className="inline-block mr-1"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Harshvardhan
                </span>
              </div>
              <div
                className="inline-block    text-2xl md:text-3xl font-semibold mt-2 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{ opacity: 1 }}
              >
                <span
                  className=" inline-block mr-1 overflow-hidden"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Software Engineer
                </span>
                {/* <span className="inline-block mr-1" style={{opacity:1, transform:"none"}}>Engineer</span> */}
              </div>
            </div>
            <div
              className="text-lg  text-gray-600 "
              style={{ opacity: 1, transform: "none" }}
            >
              Passionate about crafting efficient and scalable software
              solutions that drive innovation and deliver exceptional user
              experiences.
            </div>
            <div
              className="flex flex-wrap gap-4 font-semibold"
              style={{ opacity: 1, transform: "none" }}
            >
              <a
                href="#contact"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition duration-300"
              >
                <span className="relative z-50">Get in touch</span>
              </a>
              <a
                href="#contact"
                className="inset-ring-[.25px] inset-ring-gray-400  px-4 py-2  bg-white  rounded-md hover:bg-purple-200 hover:inset-ring-purple-100 transition duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-200  rounded-md hover:bg-purple-200 transition duration-300"
              >
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
                  className="lucide lucide-download w-4 h-4 mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span className="relative z-10">Resume</span>
              </a>
            </div>
            <div className="flex gap-4 pt-2" style={{ opacity: 1 }}>
              <a
                href="https://www.linkedin.com/in/harshvardhan30/"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
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
                  className="lucide lucide-linkedin w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/harshuvar30"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400  transition-colors transform hover:scale-110 duration-300"
              >
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
                  className="lucide lucide-github w-6 h-6"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="mailto:hv9796923@gmail.com"
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
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
                  className="lucide lucide-mail w-6 h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white  shadow-xl">
              <img
                alt="Harshvardhan"
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
                src="./public/my-profile-pic.jpeg"
              ></img>
            </div>
          </div>
        </div>
       <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
  <a href="#about" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         className="w-6 h-6">
      <path d="M12 5v14"></path>
      <path d="m19 12-7 7-7-7"></path>
    </svg>
  </a>
</div>

      </div>
    </section>
  );
}

export default Hero;
