function Projects() {
  return (
    <div id="projects" className="w-full bg-white">
      <div className="relative p-8 pt-24 container mx-auto max-w-6xl flex-col justify-center items-center md:p-24 space-y-8">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-bold">Featured Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="inset-0  flex flex-col space-y-1.5 h-full items-center justify-center relative overflow-hidden  transition-all duration-700 ease-in-out hover:-translate-y-1">
            <div className="inset-0 w-full bg-none group transition transform  duration-500 ease-in-out">
              <div className="p-6 space-y-2 relative z-10">
                <h3 className="text-2xl font-semibold tracking-tight leading-none ">
                  EarthRenewal AI Farmer Assistant Chatbot
                </h3>
                <p className="text-sm font-semibold text-gray-400 ">
                  AI-driven agricultural assistant
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className=" mb-4 transition duration-500 ease-in-out aspect-video rounded-md bg-gray-100 hover:scale-[1.02] child-hover">
                  <img
                    alt="Project-1-img"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    src="./public/images/Landing_page.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  ></img>
                </div>
                <div className=" text-gray-700">
                  Built a AI tool which converts text into image, audio, video
                  or code. It used openAI api to generate result
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold">
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    NextJs
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    OpenAI API
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    TailwindCSS
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    SSR
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    Responsive Design
                  </span>
                </div>
                <div className="hover:scale-[1.02] transition-all duration-500 ease-in-out flex items-center justify-center border-1 h-10 rounded-md border-gray-300 mt-5 hover:bg-purple-200 ">
                  <svg
                    className="h-6 w-6 "
                    fill="#b1b6af"
                    width="64px"
                    height="64px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#c1c4c0"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="mx-2 text-gray-400 font-semibold">View Project</span>
                </div>
              </div>
            </div>
          </div>
          <div className="inset-0  flex flex-col space-y-1.5 h-full items-center justify-center relative overflow-hidden  transition-all duration-700 ease-in-out hover:-translate-y-1">
            <div className="inset-0 w-full bg-none group transition transform  duration-500 ease-in-out">
              <div className="p-6 space-y-2 relative z-10">
                <h3 className="text-2xl font-semibold tracking-tight leading-none ">
                  EarthRenewal AI Farmer Assistant Chatbot
                </h3>
                <p className="text-sm font-semibold text-gray-400 ">
                  AI-driven agricultural assistant
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className=" mb-4 transition duration-500 ease-in-out aspect-video rounded-md bg-gray-100 hover:scale-[1.02] child-hover">
                  <img
                    alt="Project-1-img"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    src="./public/images/Landing_page.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  ></img>
                </div>
                <div className=" text-gray-700">
                  Built a AI tool which converts text into image, audio, video
                  or code. It used openAI api to generate result
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold">
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    NextJs
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    OpenAI API
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    TailwindCSS
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    SSR
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    Responsive Design
                  </span>
                </div>
                <div className="hover:scale-[1.02] transition-all duration-500 ease-in-out flex items-center justify-center border-1 h-10 rounded-md border-gray-300 mt-5 hover:bg-purple-200 ">
                  <svg
                    className="h-6 w-6 "
                    fill="#b1b6af"
                    width="64px"
                    height="64px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#c1c4c0"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="mx-2 text-gray-400 font-semibold">View Project</span>
                </div>
              </div>
            </div>
          </div>
          <div className="inset-0  flex flex-col space-y-1.5 h-full items-center justify-center relative overflow-hidden  transition-all duration-700 ease-in-out hover:-translate-y-1">
            <div className="inset-0 w-full bg-none group transition transform  duration-500 ease-in-out">
              <div className="p-6 space-y-2 relative z-10">
                <h3 className="text-2xl font-semibold tracking-tight leading-none ">
                  EarthRenewal AI Farmer Assistant Chatbot
                </h3>
                <p className="text-sm font-semibold text-gray-400 ">
                  AI-driven agricultural assistant
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className=" mb-4 transition duration-500 ease-in-out aspect-video rounded-md bg-gray-100 hover:scale-[1.02] child-hover">
                  <img
                    alt="Project-1-img"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    src="./public/images/Landing_page.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  ></img>
                </div>
                <div className=" text-gray-700">
                  Built a AI tool which converts text into image, audio, video
                  or code. It used openAI api to generate result
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold">
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    NextJs
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    OpenAI API
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    TailwindCSS
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    SSR
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    Responsive Design
                  </span>
                </div>
                <div className="hover:scale-[1.02] transition-all duration-500 ease-in-out flex items-center justify-center border-1 h-10 rounded-md border-gray-300 mt-5 hover:bg-purple-200 ">
                  <svg
                    className="h-6 w-6 "
                    fill="#b1b6af"
                    width="64px"
                    height="64px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#c1c4c0"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="mx-2 text-gray-400 font-semibold">View Project</span>
                </div>
              </div>
            </div>
          </div>
          <div className="inset-0  flex flex-col space-y-1.5 h-full items-center justify-center relative overflow-hidden  transition-all duration-700 ease-in-out hover:-translate-y-1">
            <div className="inset-0 w-full bg-none group transition transform  duration-500 ease-in-out">
              <div className="p-6 space-y-2 relative z-10">
                <h3 className="text-2xl font-semibold tracking-tight leading-none ">
                  EarthRenewal AI Farmer Assistant Chatbot
                </h3>
                <p className="text-sm font-semibold text-gray-400 ">
                  AI-driven agricultural assistant
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className=" mb-4 transition duration-500 ease-in-out aspect-video rounded-md bg-gray-100 hover:scale-[1.02] child-hover">
                  <img
                    alt="Project-1-img"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    src="./public/images/Landing_page.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  ></img>
                </div>
                <div className=" text-gray-700">
                  Built a AI tool which converts text into image, audio, video
                  or code. It used openAI api to generate result
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold">
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    NextJs
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    OpenAI API
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    TailwindCSS
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    SSR
                  </span>
                  <span className="rounded-2xl bg-purple-100 px-3 border border-gray-300">
                    Responsive Design
                  </span>
                </div>
                <div className="hover:scale-[1.02] transition-all duration-500 ease-in-out flex items-center justify-center border-1 h-10 rounded-md border-gray-300 mt-5 hover:bg-purple-200 ">
                  <svg
                    className="h-6 w-6 "
                    fill="#b1b6af"
                    width="64px"
                    height="64px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#c1c4c0"
                      stroke-width="0.048"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="mx-2 text-gray-400 font-semibold">View Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
