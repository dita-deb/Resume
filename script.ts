document.addEventListener("DOMContentLoaded", () => {
  const docSelector = document.getElementById("docSelector") as HTMLSelectElement;
  const docDisplay = document.getElementById("docDisplay") as HTMLDivElement;

  const docs = {
    resume: "assets/Anindita_Deb_Resume.pdf",
    certificates: "assets/Certificates.pdf",
    awards: "assets/Awards.pdf"
  };

  // Handle document selector change
  docSelector.addEventListener("change", () => {
    const selected = docSelector.value as keyof typeof docs;
    const src = docs[selected];

    docDisplay.innerHTML = src
      ? `<iframe src="${src}"></iframe>`
      : "<p>Document not found.</p>";
  });

  interface Project {
    title: string;
    description: string;
    link: string;
  }

  const projects: Project[] = [
    {
      title: "Seatbelt Safety Detection",
      description: "Real-time detection of seatbelt usage using AI models.",
      link: "https://github.com/dita-deb/Seatbelt_Safety_Detection"
    },
    {
      title: "Driver State Detection",
      description: "Monitoring driver alertness and distraction without facial recognition.",
      link: "https://github.com/dita-deb/Driver-State-Detection"
    },
    {
      title: "Rear-Camera Distraction Detection",
      description: "Detecting driver distraction using a backseat camera view.",
      link: "https://github.com/dita-deb/Driver_Dristracted_From_Rear_Camera"
    },
    {
      title: "Eye Tracking for Drowsiness",
      description: "Analyzing eye patterns and PERCLOS for fatigue detection.",
      link: "https://github.com/dita-deb/EyeTracking"
    },
    {
      title: "Language Model from Scratch",
      description: "Building a generative language model with tokenization and training pipelines.",
      link: "https://github.com/dita-deb/build-a-generative-language-model"
    }
  ];

  // Render projects dynamically
  const projectContainer = document.getElementById("projectContainer");

  if (projectContainer) {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;

      projectContainer.appendChild(card);
    });
  }
});
