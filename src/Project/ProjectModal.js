import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ProjectModal = ({ project, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); 
  const [messageType, setMessageType] = useState(""); 

  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [project]);

  if (!project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("Sending message..."); 
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
      message: e.target.message.value,
      project: project.title,
    };

    emailjs
      .send("service_78g8xwm", "template_b5q2sfi", formData, "_-AS5cNOqTDcNhAnH")
      .then(
        () => {
          setLoading(false);
          e.target.reset();
          setStatusMessage("Message sent successfully!");
          setMessageType("success");
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
          setStatusMessage("Failed to send message. Try again!");
          setMessageType("error");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "project-modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="project-modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    >
      <div className="bg-white max-w-4xl w-full rounded-xl overflow-y-auto max-h-[90vh] p-6 relative">
        <button
          onClick={onClose}
          className="flex absolute top-6 justify-center items-center right-6 bg-gray-500 text-stone-50 font-bold w-8 h-8 rounded-full text-xl hover:bg-gray-200 hover:scale-110 transition-transform m-4"
        >
          ✕
        </button>

        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" title="Click to view project">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg mb-6 shadow-lg cursor-pointer"
          />
        </a>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
        <div className="text-xs text-gray-500 mt-4 mb-2">
          <p><strong>Client:</strong> {project.client}</p>
          <p><strong>Tech:</strong> {project.techStack?.join(", ")}</p>
        </div>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Project Goals</h3>
            <p className="text-gray-600 text-sm mb-2">{project.goals}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Challenges and Solutions</h3>
            <p className="text-gray-600 text-sm mb-2">{project.challenges}</p>
            {project.challengeImages && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {project.challengeImages.map((img, idx) => (
                  <img key={idx} src={img} alt="challenge" className="rounded-lg shadow-lg" />
                ))}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
              {project.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Outcome</h3>
            <p className="text-gray-600 text-sm mb-2">{project.outcome}</p>
          </div>

          {statusMessage && (
            <div className={`text-sm p-4 mb-4 rounded-lg ${messageType === 'success' ? 'bg-green-50 text-green-800' : 'bg-blue-50 text-blue-800'}`}>
              {statusMessage}
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Have project in mind? Let's discuss</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
              <input type="text" name="question" placeholder="Your Question" required className="p-2 border rounded md:col-span-2" />
              <textarea name="message" placeholder="Your Message" rows="4" required className="p-2 border rounded md:col-span-2" />
              <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg md:col-span-2">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
