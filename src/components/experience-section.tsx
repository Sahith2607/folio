import React from 'react';

const experienceData = [
  {
    date: "May 2024 - Aug 2024",
    company: "Innovate Inc.",
    role: "Data Science Intern",
    description:
      "Developed a customer churn prediction model using machine learning techniques, achieving a 92% accuracy rate. Collaborated with the engineering team to deploy the model into a production environment.",
  },
  {
    date: "Jun 2023 - Aug 2023",
    company: "Skilltimate Solutions",
    role: "Web Development Intern",
    description:
      "Contributed to the development of a new client-facing dashboard using React and Next.js. Implemented responsive designs and improved page load times by 20% through code optimization.",
  },
  {
    date: "Jan 2023 - May 2023",
    company: "Skilltimate",
    role: "Frontend dev Intern",
    description:
      "Assisted in developing and deploying of responsive and fluid webpage.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            My Professional Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From internships to research, here's a timeline of my experience.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-16 h-full w-0.5 bg-blue-500 -translate-x-1/2 md:top-20" />
          
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg -translate-x-1/2 z-10 md:top-12" />
                
                {/* Content Card */}
                <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6 md:p-8 mx-4 md:mx-8 hover:shadow-2xl hover:bg-gray-700 transition-all duration-300">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-900 text-blue-300 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.role}
                  </h3>
                  <p className="text-lg font-semibold text-blue-400 mb-4">
                    {item.company}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
