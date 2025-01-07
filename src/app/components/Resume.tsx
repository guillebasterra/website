"use client";

import { useEffect, useState } from "react";

export default function Resume() {
  const [resumeContent, setResumeContent] = useState<string>("");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("/resume.html"); // Adjust the path if needed
        const htmlContent = await response.text();
        setResumeContent(htmlContent);
      } catch (error) {
        console.error("Error loading the resume file:", error);
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="relative p-8 max-w-6xl mx-auto">
      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="Guillermo_Basterra_Resume.pdf"
        className="absolute top-0 right-0 mt-8 mr-4 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-md flex items-center space-x-2"
        title="Download Resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v12m0 0l3-3m-3 3l-3-3m9 9H6m12 0h.01M3 21h18"
          />
        </svg>
        <span>Download</span>
      </a>

      {/* Resume Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: resumeContent }}
      ></div>
    </div>
  );
}
