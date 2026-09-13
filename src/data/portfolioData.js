export const portfolioData = {
  experience: [
    {
      id: "01",
      date: "Dec 2025 - Jan 2026",
      company: "Hansan J. Technologies",
      role: "AI Automation Assistant",
      description: [
        "Designed and deployed multiple production-grade AI agents using n8n, including AI meeting scheduler, invoice processing system, and job scraper",
        "Designed and implemented multi-step automation pipelines integrating REST APIs, webhooks, and LLMs, reducing repetitive task execution",
        "Collaborated with senior engineers to map business processes, identify automation bottlenecks, and deliver reliable n8n solutions against measurable KPIs"
      ]
    },

    {
      id: "02",
      date: "Jul 2026 - Aug 2026",
      company: "DH Solutions",
      role: "Summer Intern",
      description: [
        "Worked as a Summer Intern at DH Solution, contributing to the development of cross-platform mobile applications using Flutter and Dart",
        "Developed mobile UI screens, implemented app features, integrated APIs, and resolved bugs while gaining hands-on experience in real-world mobile application development.",
      ]
    },
    {
      id: "03",
      date: "DEC 2025",
      company: "AI Rise Expo 2025 (WUAVF, Islamabad)",
      role: "Technical Team Member & IT Coordinator",
      description: [
        "Built and deployed multiple AI agents and applications used live during the event",
        "Launched agent coordination system replacing manual methods — 25% increase in task completion rates",
        "Enabled organising team to manage larger event logistics without increasing headcount"
      ]
    },
    {
      id: "04",
      date: "2024-Present",
      company: "Google Developer Group Campus-IST",
      role: "Co-Lead, Team Agentic AI",
      description: [
        "Co-leading the Agentic AI team at GDG Campus-IST",
        "Organising workshops, demos, and AI agent hackathons for students",
        "Mentoring peers in LLM-based system design and automation workflows"
      ]
    }
  ],
  projects: [
    {
      id: "01",
      category: "FULL-STACK AI SAAS",
      title: "SplitKaro App",
      description: "Production-grade multi-tenant expense management platform with a conversational AI agent that parses natural-language messages, OCR receipt scanner (Tesseract.js), and a greedy debt-settlement algorithm.",
      tags: ["Next.js 16", "React 19", "PostgreSQL", "Prisma", "Tesseract.js", "OCR", "NLP Agent", "WhatsApp API"],
      visualType: "sphere"
    },

    {
      id: "2",
      category: "ML/COMPUTER VISION",
      title: "Face Recognition Attendance System",
      description: "Automated attendance system using Python face recognition library with MySQL database, frontend dashboard, integrated chatbot, and workflow automation.",
      tags: ["Python", "face_recognition", "MySQL", "Computer Vision", "cv2", "Chatbot"],
      visualType: "diamond"
    },

    {
      id: "03",
      category: "CONVERSATIONAL AI BOT",
      title: "Slack AI News & Group Management Agent",
      description: "Slack bot that responds to @mentions, fetches live AI news via Serper API, manages channels (create/join/archive), and maintains conversational memory — powered by Llama 4 Maverick.",
      tags: ["n8n", "Llama 4 Maverick", "Groq", "Slack API", "Serper API", "LangChain"],
      visualType: "crosshair"
    },
    {
      id: "04",
      category: "CONVERSATIONAL AI BOT",
      title: "Telegram AI News Agent",
      description: "Telegram bot with intent-based responses for AI news, greetings, and deep-dive explanations. Uses Serper API for real-time search and adapts response format dynamically.",
      tags: ["n8n", "Telegram Bot API", "Llama 4 Maverick", "Groq", "Serper API"],
      visualType: "sphere"
    },
    {
      id: "05",
      category: "CHAT-BASED TOOL",
      title: "AI Inventory Management Agent",
      description: "K2 — a chat-based AI agent managing inventory via natural-language commands (buy, sell, query). Uses Google Sheets as a live database with tool-calling architecture.",
      tags: ["n8n", "Llama 4 Maverick", "Google Sheets", "Buffer Memory", "Chat Widget"],
      visualType: "diamond"
    },
    {
      id: "06",
      category: "AUTOMATED DATA PIPELINE",
      title: "Lead Enrichment Data Pipeline",
      description: "Automated pipeline with webhook triggers that enriches company and person data via PeopleDataLabs API, with Python trigger scripts and AI-powered data cleaning.",
      tags: ["n8n", "PeopleDataLabs API", "Python", "Google Sheets", "OpenAI GPT-4o-mini", "Webhooks"],
      visualType: "crosshair"
    },
    {
      id: "07",
      category: "AI ARCHITECTURE REFERENCE",
      title: "Multi-Agent Architecture Templates",
      description: "4 production-ready agent architecture patterns: Single Agent+Human Loop, Agents Hierarchy+Parallel, Sequential+MCP Servers, and Complex Multi-Agent+Shared RAG.",
      tags: ["n8n", "OpenAI GPT-4o-mini", "Gmail", "Google Sheets", "Jira MCP", "Multi-Agent"],
      visualType: "sphere"
    },
    {
      id: "08",
      category: "WORKFLOW AUTOMATION SAAS",
      title: "Business & Marketing AI-Flow",
      description: "Full-stack AI workflow automation platform with visual workflow builder, BullMQ job queue, AI-powered lead classification, webhook triggers with HMAC verification, and execution logs.",
      tags: ["Next.js 14", "BullMQ", "Redis", "PostgreSQL", "Prisma", "OpenAI", "GitHub Actions"],
      visualType: "diamond"
    },
    {
      id: "09",
      category: "MARKETING SAAS PLATFORM",
      title: "PulseAI Marketing Suite",
      description: "Decoupled AI marketing SaaS with content scheduler, email campaign manager, blog CMS with AI drafting, analytics dashboard, and team management — 99% TypeScript.",
      tags: ["Next.js 14", "Express.js", "TypeScript", "PostgreSQL", "OpenAI GPT-4o-mini", "Docker", "Railway"],
      visualType: "crosshair"
    },
    {
      id: "10",
      category: "AI DOCUMENT PROCESSING",
      title: "Gemini Invoice Automation Agent",
      description: "End-to-end invoice processing automation that monitors Gmail, extracts PDF text, uses Gemini 1.5 Flash to parse structured financial data, and populates 4 Google Sheets automatically.",
      tags: ["n8n", "Gemini 1.5 Flash", "Gmail API", "Google Sheets", "pdf-parse"],
      visualType: "sphere"
    },

    {
      id: "11",
      category: "EVENT OPERATIONS AUTOMATION",
      title: "AI Agents Suite — AI Rise Expo 2025",
      description: "Multiple production AI agents deployed live at AI Rise 2025 (WUAVF, Islamabad) for event scheduling, coordination, and operations. Achieved 25% task completion increase.",
      tags: ["n8n", "OpenAI API", "REST APIs", "Webhooks", "Live Deployment"],
      visualType: "diamond"
    },
    {
      id: "12",
      category: "DEEP LEARNING / MEDICAL AI",
      title: "Skin Lesion Classification Model",
      description: "CNN-based deep learning model for medical image classification of skin lesions. Applies transfer learning and image augmentation for diagnostic support.",
      tags: ["Python", "PyTorch", "CNN", "Deep Learning", "Medical Imaging", "Scikit-learn"],
      visualType: "crosshair"
    },
    {
      id: "13",
      category: "SYSTEMS PROGRAMMING",
      title: "Student Grade Management System",
      description: "Low-level grade management system implemented in EMU-8086 Assembly language, demonstrating mastery of registers, memory addressing, and system-level programming.",
      tags: ["EMU-8086", "Assembly Language", "Systems Programming"],
      visualType: "sphere"
    },
    {
      id: "14",
      category: "MOBILE APP DEVELOPMENT",
      title: "Tally Ball",
      description: "An elite football target mobile application built with Flutter. Features Google Sign-In, light/dark themes, and location tracking. Deployed with a production Firebase backend and published to the Google Play Store as an Android App Bundle (AAB).",
      tags: ["Flutter", "Dart", "Firebase", "Google Play Store", "Google Sign-In"],
      visualType: "diamond"
    }
  ],
  contact: {
    email: "muhammadkamrantufailofficial@gmail.com",
    phone: "+92 322-9377233",
    location: "Islamabad, Pakistan",
    institution: "Institute of Space Technology - Class of 2027",
    linkedin: "https://www.linkedin.com/in/muhammad-kamran-tufail",
    github: "https://github.com/mkamrandeveloper",
    role: "Co-Lead, Team Agentic AI @ Google Developer Group Campus-IST",
    footerText: "Built with passion by Muhammad Kamran Tufail - AI Engineer - Islamabad, Pakistan - 2026"
  }
};
