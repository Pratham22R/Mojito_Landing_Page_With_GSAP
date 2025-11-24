import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const About = () => {
  const profileRef = useRef(null);

  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      })
      .from(
        ".top-grid div , .bottom-grid div",
        {
          scale: 1.1,
          opacity: 0,
          stagger: 0.04,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.5"
      );

    gsap.fromTo(
      profileRef.current?.querySelectorAll(".profile"),
      { x: -20, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      profileRef.current?.querySelector(".count-badge"),
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.35,
      }
    );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-7">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters{" "}
              <span className="text-white">-&nbsp;</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-row items-center justify-evenly  md:justify-start gap-8">
              <div className="flex ">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <span className="text-yellow">★</span>
                  <span className="text-yellow">★</span>
                  <span className="text-yellow">★</span>
                  <span className="text-yellow">★</span>
                  <span className="text-yellow">★</span>
                </div>

                <p className="md:text-xl text-lg font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>

              <div className="hidden md:block h-30 w-px bg-gray-700" />

              <div className="relative z-10 pl-1 pr-2 flex flex-row badge w-60 h-20 justify-center items-center bg-black noisy text-white">
                <img
                  src="/images/profile1.png"
                  alt="profile 1"
                  className="profile  w-12 h-12 md:w-12 md:h-12 rounded-full object-cover border-2 ring-1 ring-white -ml-4"
                  style={{ marginLeft: 0 }}
                />
                <img
                  src="/images/profile2.png"
                  alt="profile 2"
                  className="profile   w-12 h-12 md:w-12 md:h-12 rounded-full object-cover border-2 ring-1 ring-white -ml-4"
                />
                <img
                  src="/images/profile3.png"
                  alt="profile 3"
                  className="profile   w-12 h-12 md:w-12 md:h-12 rounded-full object-cover border-2 ring-1 ring-white -ml-4"
                />
                <span className="count-badge profile flex items-center justify-center  w-12 h-12 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm md:text-base font-semibold">
                  +12k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
