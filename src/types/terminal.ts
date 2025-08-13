export interface TerminalHistory {
  command?: string;
  output?: string;
}

export const COMMANDS = {
  HELP: 'help',
  ABOUT: 'about',
  EDUCATION: 'education',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONTACT: 'contact',
  CLEAR: 'clear',
  ROBOTICS: 'robotics',
  RESEARCH: 'research',
  COURSES: 'courses'
} as const;

export const COMMAND_OUTPUTS = {
  [COMMANDS.HELP]: `
\x1b[96m╔══════════════════════════════════════════════════════════╗
║                   Available Commands                      ║
╚══════════════════════════════════════════════════════════╝\x1b[0m

\x1b[93mMain Commands:\x1b[0m
  \x1b[96mabout\x1b[0m       Learn about Khoa Nguyen
  \x1b[96meducation\x1b[0m   View educational background
  \x1b[96mexperience\x1b[0m  View work experience
  \x1b[96mprojects\x1b[0m    View personal projects

\x1b[93mTechnical Background:\x1b[0m
  \x1b[96mrobotics\x1b[0m    View robotics projects
  \x1b[96mresearch\x1b[0m    View research experience
  \x1b[96mskills\x1b[0m      List technical skills

\x1b[93mUtilities:\x1b[0m
  \x1b[96mcontact\x1b[0m     Get contact information
  \x1b[96mclear\x1b[0m       Clear terminal screen

\x1b[90mTip: All commands are case-insensitive\x1b[0m`,

  [COMMANDS.ABOUT]: `\x1b[96m👋 About Me:\x1b[0m

UC Berkeley EECS student specializing in the intersection of AI, embedded systems, and full-stack development. Proven ability to architect and deploy scalable, cloud-native AI applications from the ground up. Passionate about leveraging software to solve complex hardware challenges.`,

  [COMMANDS.EDUCATION]: `\x1b[96m🎓 Education:\x1b[0m

University of California, Berkeley
B.S. in Electrical Engineering & Computer Science
GPA: 3.65
Expected: May 2026`,

  [COMMANDS.EXPERIENCE]: `\x1b[96m💼 Work Experience:\x1b[0m

\x1b[93mGoogle, Platforms & Devices\x1b[0m (AI Engineer Intern — Hardware Team) | May 2024 - Present
• Full-Stack AI System Development: Architected and built "Bishop," a full-stack AI agent to automate hardware design reviews; led from prototype to a deployed Google Cloud application in under 3 months for teams like Pixel
• Resilient, Real-Time Architecture: Engineered a resilient, real-time architecture using Firestore and a custom async timeout/retry system for long-running AI tasks, overcoming core SDK limitations
• Intelligent "Design Memory" System: Pioneered a system that transforms the agent from a stateless tool into an intelligent partner that learns from past reviews to improve fault detection accuracy

\x1b[93mCalCentral, Berkeley IT\x1b[0m (Frontend Software Engineer) | Aug 2024 - Present
• Large-Scale System Migration: Leading migration of a legacy Angular app to a modern React stack for 40,000+ users; engineered a new component architecture to improve developer velocity and maintainability
• Web Performance Optimization: Cut initial page load times by 30% via code-splitting and lazy loading

\x1b[93mMa Lab, UC Berkeley EECS & Physics Dept.\x1b[0m (Machine Learning Engineer & Research Team Lead) | Aug 2023 - Present
• Scientific AI Transformer Optimization: Improved scientific literature clustering accuracy by 50% by fine-tuning PyTorch Transformer models for large-scale semantic analysis
• Scalable Data Processing Pipeline: Built a scalable Python pipeline to process and analyze 1M+ multimodal physics papers, automating a previously manual research workflow
• Research Leadership & Funding: Led a student team to secure a Google Research Scholar grant, driving the project vision and development of novel AI tools for high-impact physics research`,

  [COMMANDS.PROJECTS]: `\x1b[96m🚀 Projects:\x1b[0m

• \x1b[93mSciRev.AI\x1b[0m
  - AI platform for scientific proposal review; used transformers to extract structured data from unstructured text

• \x1b[93mRoboPath\x1b[0m
  - Autonomous navigation robot (Jetson Nano) using YOLO for real-time object detection and pathfinding

• \x1b[93mAUDIOVSL\x1b[0m
  - Full-stack web app for multimedia conversion, integrating advanced DSP algorithms with an intuitive UI

• \x1b[93mIoT DoorLock Toolkit\x1b[0m
  - Open-source Raspberry Pi smart lock with a secure, remote-access mobile web interface`,

  [COMMANDS.SKILLS]: `\x1b[96m🛠️ Technical Skills:\x1b[0m

\x1b[93mLanguages:\x1b[0m
• Python, C/C++, JavaScript/TypeScript, SQL, LaTeX, HTML/CSS

\x1b[93mAI/ML:\x1b[0m
• PyTorch, TensorFlow, Transformers, Scikit-learn, Pandas, NumPy, OpenCV

\x1b[93mDev Tools & Cloud:\x1b[0m
• Git, Docker, GCP (App Engine, Firestore, Vertex AI), AWS, Heroku, FastAPI, React, Node.js

\x1b[93mHardware & EE:\x1b[0m
• Embedded Systems (Raspberry Pi, Jetson Nano), FPGA, KiCAD, Digital Logic, Control Theory`,

  [COMMANDS.CONTACT]: `\x1b[96m📫 Contact Information:\x1b[0m

• Email: khoan@berkeley.edu
• Website: www.kh0a.com
• Mobile: +1(408)406-8665`,

  [COMMANDS.ROBOTICS]: `\x1b[96m🤖 Robotics:\x1b[0m

\x1b[93mRoboPath:\x1b[0m
• Autonomous navigation robot on Jetson Nano
• YOLO-based real-time object detection and path planning
• Sensor integration and control systems`,

  [COMMANDS.RESEARCH]: `\x1b[96m🔬 Research Experience:\x1b[0m

\x1b[93mMa Lab, UC Berkeley EECS & Physics Dept.:\x1b[0m
• Role: Machine Learning Engineer & Research Team Lead (Aug 2023 - Present)
• Optimized transformer models for large-scale scientific literature analysis (50% clustering improvement)
• Built scalable Python pipelines for 1M+ multimodal physics papers
• Led a student team to secure a Google Research Scholar grant`,

  [COMMANDS.COURSES]: `\x1b[96m📚 Selected Coursework:\x1b[0m

Coming soon. Highlights include data structures, computer architecture, linear algebra, and probability.`

} as const; 