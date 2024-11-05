"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: " Industry-Academia Collaborations",
    description:
      "Joint Research Projects: Collaborate on research projects that address real-world industry challenges.Industry Mentorship Programs: Connect students with industry professionals for mentorship and guidance.Guest Lectures and Workshops: Invite industry experts to share insights and knowledge with students.Internships and Co-op Programs: Provide hands-on experience in industry settings.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Industry-Academia Collaborations
      </div>
    ),
  },
  {
    title: "Curriculum Alignment",
    description:
      "Industry-Relevant Courses: Incorporate courses that align with current industry trends and technologies.Practical Training: Focus on practical skills and problem-solving abilities.Case Studies and Real-World Projects: Use real-world scenarios to enhance learning.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Curriculum Alignment"
        />
      </div>
    ),
  },
  {
    title: " Skill Development",
    description:
      "Soft Skills Training: Emphasize communication, teamwork, and problem-solving skills.Technical Skill Workshops: Provide workshops on emerging technologies and tools.Certification Programs: Encourage students to obtain industry certifications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      Skill Development
      </div>
    ),
  },
  {
    title: "Career Guidance and Placement Services",
    description:
      "Career Counseling: Offer personalized career counseling and guidance.Mock Interviews and Resume Workshops: Prepare students for the job market.Job Fairs and Recruitment Drives: Facilitate interactions with potential employers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Career Guidance and Placement Services
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
