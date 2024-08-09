"use client"


import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { LuMoveUpRight } from "react-icons/lu";

export default function Home() {
  const techs = ["JavaScript", "Python", "PHP", "Node.js", "Express.js", "React.js", "Django", "Frappe", "WebRTC", "Next.js", "Supabase", "Postgres", "React Native", "Electron.js"]
  const techs2 = ["Python", "Django", "Frappe", "JavaScript"]
  const techs3 = ["Python", "Django", "PHP", "JavaScript", "Laravel", "Postgres"]
  return (
    <main className="flex justify-end min-h-screen relative w-full">
      <div className="fixed top-0 left-0 pb-5 pt-24 h-screen w-1/2 flex justify-end">
        <div className="flex flex-col gap-5 h-full w-full max-w-[35rem] pl-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold text-blue-100">Egessa David Wafula</h1>
            <h2 className="text-lg text-blue-100">Fullstack Software Engineer</h2>
            <p className="text-lg text-slate-400 pr-32">
              I build web, mobile and desktop applications to turn ideas into pixel-perfect, engaging, and accessible digital experiences.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-1 py-10 text-slate-400">
            <Link href={'/#about'} className="flex items-center gap-8 w-32 hover:w-44 transition-all">
              <div className="w-full h-[2px] bg-slate-400"></div>
              <h1 className="text-base">About</h1>
            </Link>
            <Link href={'/#experience'} className="flex items-center gap-8 w-32 hover:w-44 transition-all">
              <div className="w-full h-[2px] bg-slate-400"></div>
              <h1 className="text-base">Experience</h1>
            </Link>
            <Link href={'/#projects'} className="flex items-center gap-8 w-32 hover:w-44 transition-all">
              <div className="w-full h-[2px] bg-slate-400"></div>
              <h1 className="text-base">Projects</h1>
            </Link>
            <Link href={'/#contact'} className="flex items-center gap-8 w-32 hover:w-44 transition-all">
              <div className="w-full h-[2px] bg-slate-400"></div>
              <h1 className="text-base">Contact</h1>
            </Link>
          </div>
          <div className="flex justify-start items-center gap-6">
            <Link href="https://github.com/Davy-71993">
              <FaGithub size={23} className="text-slate-400" />
            </Link>
            <Link href="https://www.linkedin.com/in/egessa-david-wafula-31728810a/">
              <FaLinkedin size={23} className="text-slate-400" />
            </Link>
            <Link href="https://dolinesystems.slack.com/team/U060FJD8N2D">
              <FaSlack size={23} className="text-slate-400"/>
            </Link>
            <FaDiscord size={23} className="text-slate-400"/>
            <Link href="https://www.instagram.com/david.egessa">
              <FaInstagram size={23} className="text-slate-400"/>
            </Link>
            <Link href="https://x.com/DAVIDEGESSA">
              <FaXTwitter size={23} className="text-slate-400"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col h-full w-full max-w-[35rem] pr-5">
          <section id="about" className="px-5 pt-24 min-h-[60vh]">
            <h1 className="text-blue-100 text-2xl">About me</h1>
            <p className="text-slate-400 py-5 text-lg">
              Result oriented full stack developer with 5+ years of experience developing, testing, deploying and 
              maintaining entreprise grade software applications with the passion for research and exploring new 
              technologies.
            </p>
            <p className="text-slate-400 pb-5 text-lg">
              I have sufficient interpersonal skills and ability to work at minimum supervision to establish 
              and maintain effective working relations with people regardless of their tribes, religion and race.
            </p>
            <p className="text-slate-400 pb-5 text-lg">
            When {"I’m"} not at the computer, {"I’m"} usually rock climbing, reading, hanging out with my 
            wife and three daugters, or running around Kireka hill for physical fitness.
            </p>
          </section>
          <section id="experience" className="flex flex-col gap-5 pt-24 min-h-[80vh]">
            <h1 className="text-blue-100 text-2xl px-5">My Experience</h1>
            <div 
              onMouseEnter={()=>{
                document.getElementById("h-1")?.classList.add("text-teal-300")
              }}
              onMouseLeave={()=>{
                document.getElementById("h-1")?.classList.remove("text-teal-300")
              }}
              className="flex gap-5 p-5 hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
              <p className="w-[20%] min-20 text-slate-400 h-fit self-start text-xs md:flex items-center">2024 <span className="h-[1px] w-4 bg-slate-400 mx-1"/> PRESENT</p>
              <div className="text-slate-400 text-base w-[80%] -mt-1 cursor-pointer">
                <h1 className="text-blue-100 text-lg" id="h-1">Fullstack Engineer, Selfemployed.</h1>
                <p className="text-slate-400 py-3">
                  Developing, testing, deploying and maintaining entreprise grade software applications for clients.
                  And building personal projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {
                    techs.map((tech, index)=>(
                      <div key={index} className="px-3 py-1 rounded-xl bg-teal-400/10 text-xs text-teal-300">{ tech }</div>
                    ))
                  }
                </div>
              </div>
            </div>
            <Link href="https://blusonet.com">
              <div 
                onMouseEnter={()=>{
                  document.getElementById("h-2")?.classList.add("text-teal-300")
                }}
                onMouseLeave={()=>{
                  document.getElementById("h-2")?.classList.remove("text-teal-300")
                }}
                className="flex gap-5 p-5 hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                <p className="w-[20%] min-20 text-slate-400 h-fit self-start text-xs md:flex items-center">2021 <span className="h-[1px] w-4 bg-slate-400 mx-1"/> 2023</p>
                <div className="text-slate-400 text-base w-[80%] -mt-1 cursor-pointer">
                  <h1 className="text-blue-100 text-lg" id="h-2">Fullstack Web Developer, Bluesonet.</h1>
                  <p className="text-slate-400 py-3">
                    Built ERP systems with Python, Django, Frappe and JavaScript for different businesses and companies. 
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {
                      techs2.map((tech, index)=>(
                        <div key={index} className="px-3 py-1 rounded-xl bg-teal-400/10 text-xs text-teal-300">{ tech }</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </Link>
            <Link href="">
              <div 
                onMouseEnter={()=>{
                  document.getElementById("h-3")?.classList.add("text-teal-300")
                }}
                onMouseLeave={()=>{
                  document.getElementById("h-3")?.classList.remove("text-teal-300")
                }}
                className="flex gap-5 p-5 hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                <p className="w-[20%] min-20 text-slate-400 h-fit self-start text-xs md:flex items-center">2018 <span className="h-[1px] w-4 bg-slate-400 mx-1"/> 2020</p>
                <div className="text-slate-400 text-base w-[80%] -mt-1 cursor-pointer">
                  <h1 className="text-blue-100 text-lg" id="h-3">Software Engineer, Rehosofts Uganda.</h1>
                  <p className="text-slate-400 py-3">
                    Built Security systems with Python, Django, PHP Laravel and JavaScript for different businesses, 
                    companies and house holds. 
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {
                      techs3.map((tech, index)=>(
                        <div key={index} className="px-3 py-1 rounded-xl bg-teal-400/10 text-xs text-teal-300">{ tech }</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </Link>
          </section>
          <section id="projects" className="flex flex-col gap-5 pt-24 min-h-screen">
            <h1 className="text-2xl text-blue-100 px-5">My Peojects</h1>
            <Link href="https://e-duuka.vercel.app/">
              <div 
                onMouseEnter={()=>{
                  document.getElementById("p-1")?.classList.add("text-teal-300")
                  document.getElementById("ap-1")?.classList.remove("mt-2")
                  document.getElementById("ap-1")?.classList.add("-mt-0", "ml-1")
                }}
                onMouseLeave={()=>{
                  document.getElementById("p-1")?.classList.remove("text-teal-300")
                  document.getElementById("ap-1")?.classList.remove("-mt-0", "ml-1")
                  document.getElementById("ap-1")?.classList.add("mt-2")
                }}
                className="flex gap-5 p-5 hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                <div className="w-[30%]">
                  <Image src="/uduuka.png" alt="uDuuka" height={1000} width={1000} className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-[70%]">
                  <h1 className="text-blue-100 text-lg -mt-2 flex gap-2" id="p-1">
                    uDuuka 
                    <FiArrowUpRight id="ap-1" className="transition-all mt-2"/>
                  </h1> 
                  <p className="text-slate-400">
                    An online market place where you can easily buy and sell anything. Featues: Map 
                    view, Multiple pricing schemes, and Real-time Live chat
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://e-duuka.vercel.app/">
              <div 
                onMouseEnter={()=>{
                  document.getElementById("p-2")?.classList.add("text-teal-300")
                  document.getElementById("ap-2")?.classList.remove("mt-2")
                  document.getElementById("ap-2")?.classList.add("-mt-0", "ml-1")
                }}
                onMouseLeave={()=>{
                  document.getElementById("p-2")?.classList.remove("text-teal-300")
                  document.getElementById("ap-2")?.classList.remove("-mt-0", "ml-1")
                  document.getElementById("ap-2")?.classList.add("mt-2")
                }}
                className="flex gap-5 p-5 hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                <div className="w-[30%]">
                  <Image src="/sfu.avif" alt="uDuuka" height={1000} width={1000} className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-[70%]">
                  <h1 className="text-blue-100 text-lg -mt-2 flex gap-2" id="p-2">
                    DolineSFU 
                    <FiArrowUpRight id="ap-2" className="transition-all mt-2"/>
                  </h1> 
                  <p className="text-slate-400">
                    A selective forwarding unit that uses WebRTC to stream live video, audio and data to multiple 
                    front-end applications.
                  </p>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
