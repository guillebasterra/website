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
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Resume</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: resumeContent }}
      ></div>
    </div>
  );
}
