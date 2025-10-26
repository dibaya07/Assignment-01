"use client";
import React, { useState } from "react";
import { BiGridVertical } from "react-icons/bi";

export default function Info() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="bg-[#363C43] flex   h-[45%]  rounded-2xl shadow-[8px_10px_5px_#1c1e22] pb-4">
      <div className="icons h-3/4 flex flex-col justify-end items-center md:ml-1 relative">
        <span className="w-8 h-8 rounded-full absolute top-4 z-0 bg-linear-to-r from-[#aab3bf] to-[#3f444d] flex justify-center items-center">
          <span className="w-7 h-7 rounded-full bg-[#32373E]">
            {" "}
            <p className="w-7 h-7 z-20 text-2xl flex justify-center items-center text-transparent bg-clip-text bg-linear-to-r from-[#aab3bf] to-[#3f444d] ">
              &#63;
            </p>
          </span>
        </span>

        <BiGridVertical className="  text-[#5d5e5d] " size={40} />
      </div>
      <div>
        <div className="btns bg-[#171717] p-1.5 text-gray-400 flex gap-2 rounded-2xl my-3 xl:mr-12 md:mr-2 xl:ml-3 md:ml-1.5 relative">
          {["About", "Experience", "Recommended"].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-xl py-2 font-medium xl:text-sm md:text-[10px] relative group cursor-pointer ${
                activeTab === tab
                  ? " text-white shadow-[0_0_20px_10px_rgba(0,0,0,0.5)] "
                  : " text-gray-300 "
              }`}
            >
              <span className="relative z-10">
                {tab === "About"
                  ? "About Me"
                  : tab === "Experience"
                  ? "Experiences"
                  : "Recommended"}
              </span>
              <span
                className={`absolute inset-0 rounded-xl z-0 origin-left bg-[linear-gradient(to_right,#1a1b1c,#212226)] bgopa scale-x-0 transition-transform duration-500 ease-linear ${
                  activeTab === tab ? "scale-x-0" : "group-hover:scale-x-100"
                }`}
              ></span>
            </button>
          ))}
          {
            <span
              className={`bg-[#282930]  rounded-xl  font-medium xl:text-sm absolute xl:w-42 lg:w-33 md:w-23 xl:h-9 md:h-8 transition-transform duration-400 ease-in-out ${
                activeTab === "About"
                  ? "translate-x-0"
                  : activeTab === "Experience"
                  ? "xl:translate-x-43 lg:translate-x-35 md:translate-x-24"
                  : "xl:translate-x-87 lg:translate-x-70 md:translate-x-49"
              }`}
            ></span>
          }
        </div>

        <div className="text  mt-4 xl:max-h-[71%]  md:max-h-40 overflow-y-scroll always-scrollbar font-light text-white xl:text-md md:text-sm ml-4 xl:pr-12 md:pr-5 mr-2.5 pb-2">
          {activeTab === "About" && (
            <div>
              <p className="leading-relaxed">
                Hello, I’m Dibaya Jyoti Baruah, a passionate and motivated web
                developer with expertise in MERN stack (MongoDB, Express.js,
                React, Node.js), TypeScript, and Next.js. I am enthusiastic
                about building modern, responsive, and scalable web applications
                that deliver seamless user experiences. With a strong foundation
                in both frontend and backend development, I have experience
                designing dynamic user interfaces, integrating APIs, and
                managing databases to create complete end-to-end solutions. As a
                fresher, I am eager to contribute to real-world projects,
                collaborate with skilled teams, and continuously learn emerging
                technologies in the web development ecosystem. I am a fast
                learner, highly adaptable, and committed to writing clean,
                maintainable code while following industry best practices. My
                goal is to contribute meaningfully to impactful projects,
                enhance my problem-solving skills, and grow into a competent
                full-stack developer who can deliver efficient and innovative
                solutions.
              </p>
              <p className="mt-4 leading-relaxed">
                Although I am a fresher, I have gained hands-on experience by
                building multiple web applications using the MERN stack,
                TypeScript, and Next.js. Through these projects, I have worked
                on developing dynamic user interfaces, integrating APIs,
                managing databases, and creating responsive and scalable web
                solutions. I have also undertaken personal and academic projects
                that demonstrate my ability to design, develop, and deploy
                full-stack applications while following best practices. In
                addition, I am continuously enhancing my skills through
                self-learning, exploring modern web development tools, and
                staying updated with the latest technologies to deliver
                efficient and high-quality solutions.
              </p>
            </div>
          )}

          {activeTab === "Experience" && (
            <p className="leading-relaxed">
              I’ve worked in sales for over 8 years, specializing in B2B
              enterprise solutions. Before Salesforce, I was part of the HubSpot
              team. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi sequi rerum velit exercitationem dolorem quam accusantium
              labore quo, minus, facere tempora harum dolore consequuntur,
              libero eos repudiandae perferendis consequatur? Vel quaerat maxime
              molestias voluptas fugit dignissimos voluptate inventore quia ipsa
              sequi quasi itaque, officia harum ullam debitis aliquid cumque.
              Commodi?
            </p>
          )}

          {activeTab === "Recommended" && (
            <p className="leading-relaxed">
              I am highly motivated, eager to learn, and committed to delivering
              quality work. My strong foundation in MERN stack, TypeScript, and
              Next.js, along with my passion for building scalable and
              responsive web applications, makes me a dedicated and capable
              developer. I am adaptable, a fast learner, and thrive in
              collaborative environments where I can contribute effectively to
              team projects. I am always open to challenges that allow me to
              grow my skills and bring innovative solutions to real-world
              problems.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
