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
  \x1b[96mcourses\x1b[0m     View relevant coursework
  \x1b[96mskills\x1b[0m      List technical skills

\x1b[93mUtilities:\x1b[0m
  \x1b[96mcontact\x1b[0m     Get contact information
  \x1b[96mclear\x1b[0m       Clear terminal screen

\x1b[90mTip: All commands are case-insensitive\x1b[0m`,
    
    [COMMANDS.ABOUT]: `Hi, I'm Khoa Nguyen! 👋
    I'm a UC Berkeley EECS & Linguistics student passionate about applying machine learning 
    to media and technology, especially for underserved groups.`,
    
    [COMMANDS.EDUCATION]: `🎓 Education:
    University of California, Berkeley
    B.S. in Electrical Engineering & Computer Science
    Expected: May 2026
    
    \x1b[93mCore Coursework:\x1b[0m
    • Structure and Interpretation of Computer Programs
    • Data Structures
    • Designing Information Devices and Systems
    • Machine Structures
    • Discrete Mathematics & Probability
    
    \x1b[93mAdvanced Coursework:\x1b[0m
    
    • EE 120 - Signals & Systems
      - Fourier/Laplace transforms
      - Filter design
      - Sampling theory
    
    • EE 127 - Optimization
      - Convex optimization
      - Gradient descent
      - Neural network training
      
    • LING 100 - Introduction to Linguistics
      - Syntax and semantics
      - NLP foundations`,
    
    [COMMANDS.EXPERIENCE]: `\x1b[93m💼 Work Experience:\x1b[0m

\x1b[96mCalCentral, Berkeley IT\x1b[0m (Web Developer)
  • React Refactoring for 40k+ users
  • 30% improvement in page load times
  • RESTful API integration

\x1b[96mMa Lab, UC Berkeley\x1b[0m (ML Engineer & Lead Researcher)
  • PyTorch implementation for physics paper analysis
  • Flask-based ML application deployment
  • Team leadership and infrastructure optimization

\x1b[96mIntegem\x1b[0m (Test Engineer)
  • Robotics development kits for 2000+ students
  • SoC and microcontroller programming

\x1b[96mUrban Waves Records\x1b[0m (Audio Engineer)
  • Produced tracks with 10M+ streams
  • Audio mastering and digital conversion specialist`,
    
    [COMMANDS.PROJECTS]: `🚀 Projects:
    • SciRev.AI - AI-powered scientific proposal review
    • Doorlock Toolkit - IoT automation platform
    • roastify.me - Spotify-based music recommendation chatbot
    • AUDIOVSL - Media format conversion web app`,
    
    [COMMANDS.SKILLS]: `🛠️ Technical Skills:
    • AI/ML: PyTorch, TensorFlow, scikit-learn
    • NLP: Transformers, NLTK, spaCy
    • Robotics: ROS2, OpenCV, Control Systems
    • Signal Processing: NumPy, SciPy
    • Languages: Python, C++, MATLAB
    • Tools: Jupyter, Git, Linux`,
    
    [COMMANDS.CONTACT]: `📫 Contact:
    • Email: khoan@berkeley.edu
    • Website: www.kh0a.com
    • Phone: +1(408)406-8665`,
    
    [COMMANDS.ROBOTICS]: `🤖 Robotics & AI Projects:
    • Autonomous Navigation System
      - ROS2 implementation
      - SLAM for mapping
      - Path planning algorithms
    
    • Computer Vision Pipeline
      - Real-time object detection
      - Multi-camera calibration
      - OpenCV & PyTorch integration`,
    
    [COMMANDS.RESEARCH]: `🔬 Research Experience:
    • Machine Learning Lab
      - Deep learning for signal processing
      - Neural network optimization
      - Real-time inference systems
    
    • Robotics Research
      - Reinforcement learning
      - State estimation
      - Control systems`,
    
    [COMMANDS.COURSES]: `📚 Advanced Coursework:
    • CS 189 - Machine Learning
      - Neural networks and deep learning
      - Reinforcement learning
      - Computer vision applications
    
    • EE 120 - Signals & Systems
      - Fourier/Laplace transforms
      - Filter design
      - Sampling theory
    
    • EE 127 - Optimization
      - Convex optimization
      - Gradient descent
      - Neural network training
    
    • CS 182 - Deep Learning
      - Transformer architectures
      - Natural language processing
      - Large language models
      
    • LING 100 - Introduction to Linguistics
      - Computational linguistics
      - Syntax and semantics
      - NLP foundations`
} as const; 