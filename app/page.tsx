import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Instagram,
  X,
  BookOpen,
  FileText,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/garvinec",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/garvinec",
      icon: Github,
    },
    {
      name: "X",
      url: "https://x.com/garvinechan",
      icon: X,
    },
    {
      name: "Medium",
      url: "https://medium.com/@garvinechan",
      icon: FileText,
    },
    {
      name: "Substack",
      url: "https://garvinec.substack.com",
      icon: BookOpen,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/garvin.visuals",
      icon: Instagram,
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Manga-style background patterns */}
      <div className="absolute inset-0">
        {/* Halftone pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Speed lines effect */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-1 bg-black opacity-10 transform rotate-12"></div>
          <div className="absolute top-1/3 -right-32 w-80 h-0.5 bg-black opacity-15 transform rotate-12"></div>
          <div className="absolute top-2/5 -right-24 w-72 h-0.5 bg-black opacity-10 transform rotate-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-12">
        {/* Profile picture and name header */}
        <div className="text-center mb-16">
          {/* Profile Picture with manga-style border */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <Image
                src="/profile.png"
                alt="Garvin's Profile Picture"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tight mb-2">
            GARVIN
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide uppercase">
            SOFTWARE ENGINEER
          </h2>
        </div>

        {/* Social Links as manga panels */}
        <div className="w-full max-w-lg space-y-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.name}
                asChild
                className={`
                  w-full h-16 relative group overflow-visible
                  bg-white hover:bg-gray-50
                  border-4 border-black hover:border-black
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-200 ease-out
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                  text-black font-bold text-lg
                  rounded-none
                  transform hover:rotate-1
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full h-full px-6"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon with manga-style border */}
                    <div className="p-3 bg-black text-white border-2 border-black group-hover:bg-white group-hover:text-black transition-colors duration-200">
                      <Icon className="w-6 h-6" strokeWidth={3} />
                    </div>

                    <span className="font-black text-xl tracking-wide uppercase">
                      {link.name}
                    </span>
                  </div>

                  {/* Manga-style arrow */}
                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-black mr-2"></div>
                    <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                  </div>

                  {/* Action lines on hover */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-3 h-0.5 bg-black transform rotate-45"></div>
                    <div className="w-3 h-0.5 bg-black transform rotate-45 mt-1"></div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
