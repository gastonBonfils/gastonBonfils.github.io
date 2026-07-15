const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: "https://rjshkhr.github.io/cleanfolio",
  title: "Gastón Bonfils",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Gastón Bonfils",
  role: "AI Engineer",
  picture: "fotoPerfil.jpg",

  description:
    "AI Engineer with a Bachelor's degree in Computer Science and hands-on experience in AI model development, deep learning, and natural language processing. Eager to apply strong analytical foundations and engineering skills to data-driven problems.",
  resume: "Bonfils_Gaston.pdf", // if no resume, the button will not show up
  social: {
    linkedin:
      "https://www.linkedin.com/in/gaston-tomas-bonfils-b174372b4/?locale=en-US",
    github: "https://github.com/gastonBonfils",
    email: "gastonbonfils@gmail.com",
  },
};

const experience = [
  {
    role: "Full Stack Developer",
    company: "Lab of Radar and Remote Sensors - FAMAF UNC",
    date: "Jan 2025 — Mar 2026",
    description:
      "Designed and implemented a real-time data ingestion pipeline in Python (FastAPI + React), handling one-second interval sensor streams with per-record validation and error detection",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    date: "Jan 2024 — Nov 2024",
    description:
      "Built custom web scrapers and automated data extraction pipelines for clients, including PDF parsing tools to extract structured data from unstructured documents. Delivered end-to-end solutions from requirements gathering to deployment, working directly with clients to define scope and handle edge cases in messy real-world data.",
  },
];

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Conversation Summarizer",
    description:
      "Developed a pipeline to automatically summarize chat conversations using pre-trained LLMs via the Transformers library, evaluated and compared multiple models to identify the best performing approach for conversational summarization.",
    stack: ["Python", "Transformers", "Hugging Face"],
    sourceCode: "https://github.com/gastonBonfils/text_mining_resumenes",
    // livePreview: "https://github.com",
    image: "transformer.png",
  },
  {
    name: "Fashion MNIST Classifier",
    description:
      "Built and trained neural network models to classify clothing items from the Fashion-MNIST dataset. Experimented with network architectures and hyperparameters to optimize classification performance.",
    stack: ["PyTorch", "Scikit-Learn", "Neural Networks"],
    sourceCode: "https://github.com/gastonBonfils/fashion-mnist-autoencoder",
    // livePreview: "https://github.com",
    image: "fashionDataset2.png",
  },

  {
    name: "Reinforcement Learning Agents",
    description:
      "Developed reinforcement learning algorithms to train autonomous agents in simulated environments. Implemented A2C and policy gradient methods to optimize decision-making processes.",
    stack: ["Python", "OpenAI Gym", "TensorFlow"],
    sourceCode: "https://github.com/gastonBonfils/reinforcement-learning",
    // livePreview: "https://github.com",
    image: "rlWalker.png",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "C/C++", "JavaScript"],
  },
  {
    category: "Data Science & Machine Learning",
    items: ["PyTorch", "Scikit-Learn", "Transformers", "Pandas", "NumPy"],
  },
  {
    category: "LLMs",
    items: ["Claude Code", "Codex", "OpenCode", "LangChain", "LlamaIndex"],
  },
  {
    category: "Web",
    items: ["FastAPI", "Django", "React", "BeautifulSoup"],
  },
  {
    category: "Tools",
    items: ["Git", "CI/CD", "Linux", "AWS", "Docker", "Kubernetes", "Jira"],
  },
];
const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "gastonbonfils@gmail.com",
};

export { header, about, projects, skills, contact, experience };
