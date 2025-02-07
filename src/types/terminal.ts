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

First-gen UC Berkeley EECS student with a passion for pushing the boundaries of hardware-software integration. 
Experienced in designing and prototyping embedded systems, optimizing machine learning models, and working 
collaboratively on interdisciplinary projects to drive innovation and accessibility.`,
    
    [COMMANDS.EDUCATION]: `\x1b[96m🎓 Education:\x1b[0m

University of California, Berkeley
B.S. in Electrical Engineering & Computer Science
GPA: 3.65
Expected: May 2026`,
    
    [COMMANDS.EXPERIENCE]: `\x1b[96m💼 Work Experience:\x1b[0m

\x1b[93mCalCentral, Berkeley IT\x1b[0m (Software Engineer - ReactJS) | Aug 2024 - Present
• Scalable System Migration: Spearheaded Angular to React transition for 40k+ users
• Performance Optimization: 30% reduction in platform load times
• Implemented lazy loading and code-splitting techniques

\x1b[93mMa Lab, UC Berkeley EECS & Physics\x1b[0m (ML Engineer & Research Lead) | Aug 2023 - Present
• Optimized transformer models for physics literature analysis (50% better clustering)
• Built Python application for 1m+ APS Papers analysis
• Led team to secure Google Research Scholar funding

\x1b[93mIntegem\x1b[0m (Embedded Systems Engineer Intern) | May 2024 - Aug 2024
• Designed robotics control systems using NVIDIA Jetson Nano
• Developed sensor interfacing circuits for real-time data
• Created educational robotics kits for 2,000+ students
• Cross-functional collaboration with engineers and educators`,
    
    [COMMANDS.PROJECTS]: `\x1b[96m🚀 Projects:\x1b[0m

• \x1b[93mSciRev.AI\x1b[0m
  - AI platform for scientific proposal review
  - Utilizes transformers for semantic insights
  - Extracts structured information from unstructured formats

• \x1b[93mRoboPath\x1b[0m
  - Autonomous robotic system using Jetson Nano
  - Implements object detection capabilities

• \x1b[93mAUDIOVSL\x1b[0m
  - Multimedia conversion web app
  - Integrates advanced signal processing
  - Intuitive user interface design

• \x1b[93mIoT DoorLock Toolkit\x1b[0m
  - Open source Raspberry Pi-based smart home system
  - Remote control capabilities`,
    
    [COMMANDS.SKILLS]: `\x1b[96m🛠️ Technical Skills:\x1b[0m

\x1b[93mCore Technologies:\x1b[0m
• Embedded Systems
• Control Theory
• Machine Learning (Transformers, GNNs)
• FPGA Development
• Signal Processing
• Hardware Prototyping

\x1b[93mProgramming:\x1b[0m
• Python
• C/C++

\x1b[93mTools & Platforms:\x1b[0m
• PyTorch
• TensorFlow
• KiCAD
• Jetson Nano
• Heroku
• AWS
• Docker

\x1b[93mSoft Skills:\x1b[0m
• Leadership
• Interdisciplinary collaboration
• Adaptability
• Creative problem-solving`,
    
    [COMMANDS.CONTACT]: `\x1b[96m📫 Contact Information:\x1b[0m

• Email: khoan@berkeley.edu
• Website: www.kh0a.com
• Mobile: +1(408)406-8665`,
    
    [COMMANDS.ROBOTICS]: `\x1b[96m🤖 Robotics Experience:\x1b[0m

\x1b[93mRoboPath Project:\x1b[0m
• Autonomous navigation system using Jetson Nano
• Real-time object detection implementation
• Sensor integration and control systems

\x1b[93mIntegem Robotics Work:\x1b[0m
• Designed robotics control systems
• Implemented hardware-software integration
• Created educational robotics kits
• Developed sensor interfacing circuits`,
    
    [COMMANDS.RESEARCH]: `\x1b[96m🔬 Research Experience:\x1b[0m

\x1b[93mMa Lab, UC Berkeley EECS & Physics Department:\x1b[0m
• Project: physmap.org
• Role: Machine Learning Engineer & Research Team Lead
• Focus: AI-Driven Research Tools

Key Achievements:
• Optimized transformer-based models for physics literature analysis
• 50% improvement in clustering accuracy
• Engineered Python-based application for 1m+ APS Papers
• Secured Google Research Scholar funding
• Led cross-functional team of interns`

} as const; 