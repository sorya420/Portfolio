import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import ProfileImage from "../About/ProfileImage/sonu.jpg"; // Adjust the path as necessary


export const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left-side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greetings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sonu kumar
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">The</span>
            {/* Typewriter effect for skills */}
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "MERN Stack Developer",
                  "React.js Enthusiast",
                  "JavaScript Lover",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h3>
          {/* About me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate web developer with a focus on creating dynamic and
            responsive web applications. I specialize in the MERN stack,
            leveraging MongoDB, Express.js, React.js, and Node.js to build
            robust and scalable applications.
          </p>
          {/*  Resume Button */}
          <a
            href="https://drive.google.com/file/d/1L5-7m9KVlrCBuW3wDr32-l98nA-34ElD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-full mt-5 text-lg font-bold transisition-duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec,",
            }}
          >
            Resume
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full" 
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <img src={ProfileImage}
             alt="Sonu Kumar" 
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgb (130,69,236,0.5)]"
           />
            </Tilt>
        
        </div>
      </div>
    </section>
  );
};
