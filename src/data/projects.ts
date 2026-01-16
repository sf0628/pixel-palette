export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  gifPreview?: string;
  tags: string[];
  role: string;
  scope: string;
  highlights: string[];
  // Case study fields
  valueProposition: string;
  problemStatement: string;
  targetUsers: string;
  successCriteria: string[];
  constraints: string[];
  research?: {
    competitiveAnalysis?: string;
    keyInsights: string[];
    ideasExplored: string[];
  };
  design?: {
    userFlows?: string;
    wireframes?: string[];
    iterations?: string[];
    uxConsiderations: string[];
    visualDecisions: string[];
  };
  technicalArchitecture?: {
    stackRationale: string;
    systemOverview: string;
    dataModels?: string;
    apiDesign?: string;
  };
  implementation?: {
    keyFeatures: Array<{
      title: string;
      description: string;
      technicalDetails?: string;
    }>;
    algorithms?: string[];
    stateManagement?: string;
    performanceConsiderations?: string[];
    edgeCases?: string[];
  };
  challenges?: {
    technical: string[];
    design: string[];
    tradeoffs: Array<{
      decision: string;
      rationale: string;
    }>;
  };
  results?: {
    metrics?: string[];
    performance?: string[];
    outcomes: string[];
    technicalDemonstration: string[];
  };
  lessonsLearned?: {
    skillsDeveloped: string[];
    whatWouldChange: string[];
  };
  nextSteps?: {
    plannedFeatures: string[];
    learningGoals: string[];
  };
  links?: {
    liveDemo?: string;
    github?: string;
  };
  images?: Array<{
    src: string;
    caption?: string;
    section?: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "prosperous",
    title: "ProsperouSSS",
    shortDescription: "AI-powered financial digital twin platform built for Finhacks 2025. Won 1st place & $1000.",
    fullDescription: "ProsperouSSS is an AI-powered Financial Digital Twin platform that creates digital twins of demographics to simulate financial behaviors, offering insights, visualizations, and scenario analysis for businesses and financial professionals. Built during Finhacks 2025 with my teammate Shresht, we leveraged GPT-4o to fetch demographic data using natural language queries, enabling non-technical users to generate accurate financial personas. The platform includes advanced predictive insights, scenario modeling, and comprehensive reporting capabilities—all designed to democratize access to financial intelligence.",
    thumbnail: "/src/assets/prosperouSSS/title_card.png",
    gifPreview: "/placeholder-prosperous-preview.gif",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/UI", "Plotly Dash", "GPT-4o", "Framer Motion"],
    role: "Full-Stack Developer & Co-Creator",
    scope: "Hackathon project - Team collaboration (Team SSS), AI Track, Diversity Track, Start Up Track",
    highlights: [
      "Won 1st place & $1000 at Finhacks 2025",
      "LLM-powered natural language demographic fetching",
      "Advanced financial visualizations and predictive insights",
      "Comprehensive scenario analysis and reporting"
    ],
    valueProposition: "Mission: Empower individuals and organizations to make data-driven financial decisions through our AI-powered financial digital twin platform. Vision: To revolutionize and democratize personal and institutional finance.",
    problemStatement: "We identified three critical problems in financial data access and analysis: (1) Difficulty in accessing and interpreting demographic-specific financial data, leaving many underserved markets invisible to businesses. (2) Lack of tools to predict consumer behavior or perform scenario analysis targeted to specific personas. (3) Gatekept financial data that most companies lack access to, creating barriers for small businesses and organizations trying to understand their target demographics. This particularly impacts those at the intersection of economic disadvantage and identity-based marginalization—communities doubly underserved by existing financial tools.",
    targetUsers: "Financial analysts, marketers, businesses lacking in-house data capabilities, fintech companies, advertisers, small businesses, and governments seeking demographic financial insights.",
    successCriteria: [
      "Generate accurate digital twins from demographic input using natural language queries",
      "Provide meaningful financial predictions and interactive visualizations",
      "Enable effective scenario modeling and 'what-if' analysis",
      "Deliver comprehensive reports with downloadable JSON and visualizations"
    ],
    constraints: [
      "Time: Hackathon timeframe (Finhacks 2025 - limited development window)",
      "Tech: Modern web stack with AI integration (Next.js, TypeScript, GPT-4o)",
      "Data: Integration with demographic and financial APIs within hackathon constraints",
      "Performance: Real-time LLM API calls and responsive visualizations",
      "Team: Two-person collaboration requiring efficient division of work"
    ],
    research: {
      keyInsights: [
        "The global business intelligence market is projected to grow at a CACR of 13.26% by 2030, indicating significant demand for AI-driven insights tools",
        "Natural language input dramatically improves accessibility for non-technical users who need demographic financial data",
        "Visualizations are essential for understanding complex financial relationships and patterns",
        "Scenario modeling provides actionable insights that help businesses make informed decisions about pricing, marketing, and product accessibility"
      ],
      ideasExplored: [
        "Real-time data streaming (deferred: beyond hackathon scope)",
        "Mobile app version (future consideration for broader accessibility)",
        "Advanced ML models with fine-tuning (enhanced post-hackathon for more accurate predictions)",
        "Integration with more financial data sources (future expansion)"
      ]
    },
    design: {
      uxConsiderations: [
        "Natural language input for demographic queries",
        "Interactive visualizations for financial data exploration",
        "Clear scenario modeling interface"
      ],
      visualDecisions: [
        "Modern, clean interface with financial data visualization focus",
        "Dark mode support for extended use",
        "Responsive design for various screen sizes"
      ]
    },
    technicalArchitecture: {
      stackRationale: "Next.js for full-stack React development, TypeScript for type safety, GPT-4o for AI capabilities, Plotly Dash for advanced visualizations, Shadcn/UI for consistent design system.",
      systemOverview: "Next.js application with API routes for LLM integration, client-side visualization components, and report generation system.",
      apiDesign: "RESTful API routes for demographic fetching, digital twin generation, and report export/import functionality."
    },
    implementation: {
      keyFeatures: [
        {
          title: "LLM-Powered Demographic Analysis",
          description: "Integrated GPT-4o to fetch demographic information using natural language queries. This was one of my favorite features to build—watching users simply type a persona description like 'young professional in tech living in San Francisco' and instantly generate accurate financial profiles was incredibly rewarding. The LLM handles complex demographic parsing and translates it into structured data for our digital twin engine.",
          technicalDetails: "OpenAI API integration with carefully engineered prompts for reliable demographic data extraction, formatting, and validation. Implemented error handling for edge cases in natural language input."
        },
        {
          title: "Predictive Insights Engine",
          description: "Built an AI-powered prediction system that generates financial behaviors based on demographic data. This allows businesses to understand how different persona groups might respond to pricing changes, market shifts, or economic conditions. The predictions are visualized through interactive charts that make complex data relationships immediately understandable.",
          technicalDetails: "Predictive algorithms that combine demographic data with financial modeling, integrated with Plotly Dash for dynamic, interactive visualizations. Real-time updates as users modify scenario parameters."
        },
        {
          title: "Scenario Analysis & 'What-If' Modeling",
          description: "Implemented comprehensive scenario modeling that lets users explore 'what-if' questions: What happens if market conditions change? How does income shift affect spending patterns? This feature proved particularly valuable during our demo, as judges could see immediate visual feedback when tweaking parameters. Working on this feature taught me a lot about state management and real-time data flow.",
          technicalDetails: "React state management with context API for scenario parameters, predictive algorithms based on demographic and financial data correlations, real-time visualization updates with smooth transitions."
        },
        {
          title: "Visualizations & Reports",
          description: "Created interactive charts and comprehensive reporting capabilities. Users can download demographic data as JSON and export visualizations for presentations or further analysis. The visualizations were crucial for our hackathon presentation—they transformed abstract financial concepts into clear, compelling narratives that resonated with both technical and non-technical judges.",
          technicalDetails: "Plotly Dash integration with React components for interactive visualizations, JSON serialization/deserialization for data export/import, validation and error handling for imported data."
        }
      ],
      stateManagement: "React state management with context API for global application state, local state for component interactions.",
      performanceConsiderations: [
        "Optimized LLM API calls with caching where appropriate",
        "Lazy loading for large visualization components",
        "Efficient data processing for scenario calculations"
      ],
      edgeCases: [
        "Handling LLM API failures and timeouts",
        "Invalid demographic input validation",
        "Large dataset visualization performance"
      ]
    },
    challenges: {
      technical: [
        "Integrating multiple APIs (demographic data sources, financial APIs, and OpenAI's GPT-4o) within a tight hackathon timeframe while ensuring reliability and error handling",
        "Optimizing LLM API calls for both performance and cost—we learned to batch requests and implement smart caching strategies on the fly",
        "Creating responsive, performant visualizations with potentially large datasets without compromising user experience",
        "Coordinating with my teammate Shresht to ensure seamless integration of our respective components under time pressure"
      ],
      design: [
        "Balancing feature richness with hackathon time constraints—we had ambitious goals and had to make strategic decisions about what to build first",
        "Creating intuitive interfaces for complex financial concepts that would be accessible to both technical judges and business-minded evaluators",
        "Designing the flow to guide users through persona creation, scenario modeling, and results interpretation in a logical, non-overwhelming way"
      ],
      tradeoffs: [
        {
          decision: "Comprehensive features vs. deep polish",
          rationale: "We chose to build a complete, functional product with all key features rather than polishing individual components to perfection. This strategy paid off—the judges were impressed by our breadth of functionality and our ability to demonstrate the full vision of the platform."
        },
        {
          decision: "Real-time data vs. simulated/predicted data",
          rationale: "Given hackathon constraints, we focused on building robust prediction and scenario modeling using available data rather than integrating real-time streaming sources. This allowed us to demonstrate the core value proposition while maintaining system reliability."
        }
      ]
    },
    results: {
      metrics: [
        "Won 1st place at Finhacks 2025 in the AI Track, Diversity Track, and Start Up Track",
        "Received $1000 prize—a validation of our concept and execution",
        "Successfully demonstrated all four core features (Demographic Analysis, Predictive Insights, Scenario Analysis, Visualizations & Reports)",
        "Presented to judges representing both technical and business perspectives, receiving positive feedback on our approach"
      ],
      outcomes: [
        "Validated our concept with judges who recognized the potential to address underserved markets and democratize financial data",
        "Demonstrated our ability to rapidly prototype and deliver a full-stack application under tight time constraints",
        "Showcased effective team collaboration with Shresht, dividing responsibilities while maintaining cohesive integration",
        "Proved that AI-powered tools can make complex financial data accessible to non-technical users through intuitive interfaces"
      ],
      technicalDemonstration: [
        "Full-stack Next.js development with TypeScript for type safety and maintainability",
        "LLM API integration with GPT-4o and advanced prompt engineering techniques",
        "Advanced data visualization using Plotly Dash integrated seamlessly with React",
        "Complex state management for scenario modeling with real-time updates",
        "Robust report generation with JSON export/import capabilities",
        "Responsive design that works across devices for accessibility"
      ]
    },
    lessonsLearned: {
      skillsDeveloped: [
        "LLM API integration and prompt engineering—learning to extract structured data from natural language input was a fascinating challenge",
        "Advanced data visualization with Plotly Dash, discovering how to make financial data tell compelling stories",
        "Rapid prototyping under pressure—this hackathon taught me valuable lessons about prioritization and time management",
        "Next.js full-stack development, particularly API route design and client-server integration",
        "Financial data modeling and analysis, gaining insights into how demographic and economic factors interrelate",
        "Team collaboration and division of work in high-pressure environments"
      ],
      whatWouldChange: [
        "Implement more robust error handling for API failures, including graceful degradation when services are unavailable",
        "Add comprehensive testing suite to catch edge cases we discovered during the demo",
        "Enhance visualization performance optimizations for larger datasets",
        "Expand scenario modeling capabilities with more parameters and prediction models",
        "Invest more time in UX polish, particularly onboarding flows for first-time users"
      ]
    },
    nextSteps: {
      plannedFeatures: [
        "Continuous Optimization: Pricing and phrasing based on market data, improving prediction accuracy with more training data",
        "Authentication & Security: Implement user authentication with role-based permissions and data privacy controls",
        "Real-Time A/B Testing: Run simultaneous experiments to test different strategies, UI components, and features",
        "Global Scaling: Scale to train on global data and support businesses worldwide, not just North American markets"
      ],
      learningGoals: [
        "Explore advanced financial modeling techniques to improve prediction accuracy",
        "Learn more about LLM fine-tuning for domain-specific financial tasks",
        "Study advanced data visualization patterns and accessibility considerations",
        "Improve API integration and error handling strategies for production-ready systems",
        "Investigate machine learning approaches beyond LLM for more accurate persona predictions"
      ]
    },
    links: {
      github: "https://github.com/Tetraslam/finhacks"
    },
    images: [
      {
        src: "/src/assets/prosperouSSS/create_twin.png",
        caption: "Front page: Users generate financial digital twins using natural language",
        section: "overview"
      },
      {
        src: "/src/assets/prosperouSSS/powerpoint.png",
        caption: "Mission & Vision: Empowering data-driven financial decisions through AI-powered financial digital twins",
        section: "problem-goals"
      },
      {
        src: "/src/assets/prosperouSSS/user_demographics.png",
        caption: "Detailed demographic summary breaking down a financial digital twin",
        section: "implementation"
      },
      {
        src: "/src/assets/prosperouSSS/correlation_insights.png",
        caption: "Analyzing relationships between different financial and demographic metrics",
        section: "implementation"
      },
      {
        src: "/src/assets/prosperouSSS/correlation_spending_market.png",
        caption: "Spending vs Market Conditions: Graphical correlation view with key insights summary",
        section: "implementation"
      },
      {
        src: "/src/assets/prosperouSSS/price_recommenations.png",
        caption: "Personalized price recommendations with market analysis, demographics, price distribution, and sensitivity charts",
        section: "implementation"
      },
      {
        src: "/src/assets/prosperouSSS/what_if_scenarios.png",
        caption: "Scenario Analysis: Select simulated scenarios like 'Career Change' to see their impact on the digital twin",
        section: "implementation"
      },
      {
        src: "/src/assets/prosperouSSS/export_import.png",
        caption: "Export/Import: Save digital twin data as JSON or PDF, or import previously saved twins",
        section: "implementation"
      }
    ]
  },
  {
    id: "stock-manager",
    title: "Stock Manager",
    shortDescription: "A comprehensive Java application for managing stock portfolios with real-time data integration and performance analysis.",
    fullDescription: "A Java application for managing stock portfolios and performance. Integrated algorithms to manage portfolios, analyze stock trends, track stocks, value, and data persistence via XML. Incorporated Alpha Vantage API to retrieve real-time stock data by sending requests to an external financial data API. Wrote 150+ tests in JUnit, including unit/integration tests and mock testing for MVC components, ensuring robust functionality.",
    thumbnail: "/src/assets/stock-manager/title_card.png",
    gifPreview: "/placeholder-stock-preview.gif",
    tags: ["Java", "Java Swing", "JUnit", "XML"],
    role: "Solo Developer",
    scope: "Desktop application with MVC architecture",
    highlights: [
      "150+ comprehensive unit and integration tests",
      "Real-time stock data integration via API",
      "XML-based data persistence",
      "MVC architecture with separation of concerns"
    ],
    valueProposition: "Professional-grade portfolio management with real-time market data and comprehensive testing.",
    problemStatement: "Existing portfolio management tools are either too complex for casual investors or lack proper testing and data persistence. Users need a reliable, well-tested application for tracking their investments.",
    targetUsers: "Individual investors and students learning about portfolio management",
    successCriteria: [
      "Support multiple portfolios with 100+ stocks",
      "Real-time data updates via API integration",
      "100% test coverage for core business logic",
      "Reliable data persistence and recovery"
    ],
    constraints: [
      "Tech: Java Swing for desktop UI",
      "Data: XML for persistence (no database)",
      "Testing: Comprehensive JUnit test suite required",
      "Performance: Handle 1000+ stock updates efficiently"
    ],
    research: {
      keyInsights: [
        "Alpha Vantage API provides reliable free-tier access",
        "XML is sufficient for small-scale data persistence",
        "MVC pattern essential for testability"
      ],
      ideasExplored: [
        "Web-based interface (discarded: requirement was desktop app)",
        "Database integration (deferred: XML chosen for simplicity)",
        "Real-time WebSocket updates (future enhancement)"
      ]
    },
    design: {
      uxConsiderations: [
        "Clear visual hierarchy for portfolio overview",
        "Color coding for gains/losses",
        "Intuitive navigation between portfolios"
      ],
      visualDecisions: [
        "Traditional desktop application aesthetic",
        "High contrast for financial data readability",
        "Table-based layouts for structured data"
      ]
    },
    technicalArchitecture: {
      stackRationale: "Java Swing for cross-platform desktop UI, XML for lightweight persistence, JUnit for comprehensive testing.",
      systemOverview: "MVC architecture with Model handling business logic, View for UI, Controller coordinating interactions. API client layer abstracts external data fetching.",
      dataModels: "Portfolio → Holdings → Stock Data. XML schema with validation for data integrity."
    },
    implementation: {
      keyFeatures: [
        {
          title: "Portfolio Management Algorithms",
          description: "Implemented portfolio calculation algorithms for value tracking, profit/loss analysis, and performance metrics.",
          technicalDetails: "Recursive algorithms for portfolio aggregation, efficient data structures for O(log n) lookups."
        },
        {
          title: "API Integration Layer",
          description: "Built robust API client with error handling, rate limiting, and caching to manage Alpha Vantage API constraints.",
          technicalDetails: "HTTP client with retry logic, response caching to minimize API calls, async data fetching."
        },
        {
          title: "XML Persistence System",
          description: "Custom XML serialization/deserialization with validation and error recovery for reliable data persistence.",
          technicalDetails: "DOM parser for XML operations, schema validation, graceful error handling for corrupted files."
        }
      ],
      algorithms: [
        "Portfolio value calculation with recursive aggregation",
        "Stock price trend analysis algorithms",
        "Efficient search and filtering algorithms"
      ],
      performanceConsiderations: [
        "Lazy loading of stock data",
        "Caching API responses to reduce calls",
        "Efficient XML parsing for large portfolios"
      ],
      edgeCases: [
        "Handling API rate limits and failures",
        "Corrupted XML file recovery",
        "Invalid stock symbol handling"
      ]
    },
    challenges: {
      technical: [
        "Managing API rate limits effectively",
        "Ensuring thread safety in Swing UI updates",
        "XML parsing performance with large datasets"
      ],
      design: [
        "Creating intuitive UI with Swing's limitations",
        "Displaying complex financial data clearly"
      ],
      tradeoffs: [
        {
          decision: "Synchronous vs. asynchronous API calls",
          rationale: "Chose synchronous with background threads to maintain UI responsiveness while keeping code complexity manageable."
        }
      ]
    },
    results: {
      metrics: [
        "150+ tests with 95%+ code coverage",
        "Sub-second portfolio load times",
        "Successful handling of 1000+ stock entries"
      ],
      outcomes: [
        "Robust, well-tested application",
        "Reliable data persistence",
        "Professional-grade code quality"
      ],
      technicalDemonstration: [
        "Object-oriented design principles",
        "Comprehensive testing strategies",
        "API integration best practices",
        "MVC architecture implementation"
      ]
    },
    lessonsLearned: {
      skillsDeveloped: [
        "Java Swing desktop development",
        "JUnit testing and mocking",
        "XML data handling",
        "API integration patterns"
      ],
      whatWouldChange: [
        "Use modern JavaFX instead of Swing",
        "Implement database instead of XML",
        "Add more comprehensive error handling UI"
      ]
    },
    nextSteps: {
      plannedFeatures: [
        "Real-time WebSocket updates",
        "Advanced charting and visualization",
        "Export to CSV/PDF functionality"
      ],
      learningGoals: [
        "Explore modern Java desktop frameworks",
        "Learn advanced testing techniques",
        "Study financial data visualization"
      ]
    },
    links: {
      github: "https://github.com/sf0628/stock-manager"
    }
  },
  {
    id: "wardrobe-wizard",
    title: "Wardrobe Wizard",
    shortDescription: "A full-stack web application that virtualizes and curates your wardrobe with intelligent recommendations.",
    fullDescription: "A full-stack web application that virtualizes and curates your wardrobe. Developed a database to store user inputted wardrobe items and integrated user authentication and a populated user's wardrobe. Engineered a responsive UI with modern styling to provide a seamless user experience across devices. Currently researching machine learning-based recommendation algorithms to enhance personalized wardrobe suggestions.",
    thumbnail: "/src/assets/wardrobe-wizard/title_card.png",
    gifPreview: "/placeholder-wardrobe-preview.gif",
    tags: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Supabase"],
    role: "Full-Stack Developer",
    scope: "Solo project - End-to-end development",
    highlights: [
      "Full-stack implementation with authentication",
      "Responsive design across all devices",
      "Database-driven wardrobe management",
      "ML recommendation research in progress"
    ],
    valueProposition: "Transform your physical wardrobe into a digital, intelligent styling assistant.",
    problemStatement: "People struggle to visualize their wardrobe combinations, leading to underutilized clothing and decision fatigue. Existing solutions lack personalization and don't integrate well with users' actual clothing collections.",
    targetUsers: "Fashion-conscious individuals and minimalists seeking to maximize their wardrobe utility",
    successCriteria: [
      "Users can upload and organize 50+ wardrobe items",
      "Recommendation system suggests viable outfit combinations",
      "Mobile-responsive interface with <2s load time",
      "Secure user authentication and data persistence"
    ],
    constraints: [
      "Time: 3-month development window",
      "Tech: React + Supabase stack requirement",
      "Performance: Sub-2 second initial load",
      "Accessibility: WCAG 2.1 AA compliance"
    ],
    research: {
      keyInsights: [
        "Users prefer visual browsing over text-based search",
        "Color coordination is the primary styling concern",
        "Seasonal filtering is essential for usability"
      ],
      ideasExplored: [
        "AR try-on feature (discarded: too complex for MVP)",
        "Social sharing (deferred: focus on core functionality)",
        "Shopping integration (future consideration)"
      ]
    },
    design: {
      uxConsiderations: [
        "Drag-and-drop image upload for ease of use",
        "Color picker for automatic categorization",
        "Grid view with filtering for quick browsing"
      ],
      visualDecisions: [
        "Clean, minimalist aesthetic to let clothing be the focus",
        "High-contrast color scheme for accessibility",
        "Card-based layout for scannable content"
      ]
    },
    technicalArchitecture: {
      stackRationale: "React for component reusability, Supabase for rapid backend development with built-in auth, and PostgreSQL for relational wardrobe data.",
      systemOverview: "Client-side React app communicates with Supabase REST API. Real-time updates via Supabase subscriptions for collaborative features.",
      dataModels: "Users → Wardrobe Items → Outfits → Recommendations. Normalized schema with foreign key relationships."
    },
    implementation: {
      keyFeatures: [
        {
          title: "Image Upload & Processing",
          description: "Implemented drag-and-drop image upload with client-side compression to reduce storage costs and improve load times.",
          technicalDetails: "Used FileReader API and Canvas API for image compression before Supabase storage upload."
        },
        {
          title: "Dynamic Filtering System",
          description: "Built a flexible filtering system supporting multiple criteria (color, season, category) with URL state management.",
          technicalDetails: "React hooks for filter state, URLSearchParams for shareable filtered views."
        },
        {
          title: "Authentication Flow",
          description: "Integrated Supabase Auth with email/password and social providers, with protected routes and session management.",
          technicalDetails: "React Router guards, Supabase session refresh tokens, secure cookie storage."
        }
      ],
      stateManagement: "React Context API for global user state, local state for UI interactions, Supabase client for server state.",
      performanceConsiderations: [
        "Image lazy loading with Intersection Observer",
        "Virtualized grid for large wardrobe collections",
        "Debounced search inputs to reduce API calls"
      ],
      edgeCases: [
        "Handling duplicate image uploads",
        "Network failures during save operations",
        "Large image file size validation"
      ]
    },
    challenges: {
      technical: [
        "Optimizing image storage and retrieval performance",
        "Implementing efficient recommendation algorithm without ML infrastructure"
      ],
      design: [
        "Balancing information density with visual clarity",
        "Creating intuitive mobile navigation for large wardrobes"
      ],
      tradeoffs: [
        {
          decision: "Client-side image compression vs. server-side processing",
          rationale: "Chose client-side to reduce server load and improve perceived performance, accepting potential browser compatibility concerns."
        }
      ]
    },
    results: {
      outcomes: [
        "Successfully deployed with user authentication",
        "Responsive design tested across devices",
        "Database schema supports 1000+ items per user"
      ],
      technicalDemonstration: [
        "Full-stack development with modern React patterns",
        "Database design and optimization",
        "Authentication and security best practices",
        "Responsive UI/UX implementation"
      ]
    },
    lessonsLearned: {
      skillsDeveloped: [
        "Supabase integration and database design",
        "Image handling and optimization",
        "React state management patterns",
        "Responsive design implementation"
      ],
      whatWouldChange: [
        "Implement image CDN for better global performance",
        "Add offline support with service workers",
        "Start with TypeScript from the beginning for better type safety"
      ]
    },
    nextSteps: {
      plannedFeatures: [
        "Machine learning-based outfit recommendations",
        "Social sharing and community features",
        "Integration with fashion APIs for trend data"
      ],
      learningGoals: [
        "Deep dive into ML recommendation systems",
        "Explore GraphQL for more efficient data fetching",
        "Learn advanced image processing techniques"
      ]
    },
    links: {
      github: "https://github.com/sf0628/s24-group4-wardrobe-wizard"
    }
  },
  {
    id: "edushare-hub",
    title: "EduShare Hub",
    shortDescription: "An educational resource sharing platform enabling collaborative learning and resource management.",
    fullDescription: "An educational resource sharing web application. Led a 4-member team to develop an educational resource sharing web app, managing 40+ CRUD operations in a MySQL database for real-time resource management. Utilized Docker to containerize Flask applications and MySQL database, ensuring a consistent and isolated environment.",
    thumbnail: "/src/assets/edushare-hub/title_card.png",
    gifPreview: "/placeholder-edushare-preview.gif",
    tags: ["Python", "Flask", "AppSmith", "MySQL", "Docker"],
    role: "Team Lead & Full-Stack Developer",
    scope: "4-person team project - Full-stack web application",
    highlights: [
      "Led 4-person development team",
      "40+ CRUD operations across multiple resources",
      "Docker containerization for deployment",
      "Real-time resource management system"
    ],
    valueProposition: "Streamline educational resource sharing with collaborative features and robust backend infrastructure.",
    problemStatement: "Educators and students struggle to share and discover quality educational resources efficiently. Existing platforms lack proper organization, search capabilities, and collaborative features.",
    targetUsers: "Educators, students, and educational institutions seeking to share and discover learning resources",
    successCriteria: [
      "Support 1000+ concurrent users",
      "40+ CRUD operations functioning correctly",
      "Sub-3 second page load times",
      "Docker deployment with zero-downtime updates"
    ],
    constraints: [
      "Team: 4-person distributed team",
      "Time: 3-month development cycle",
      "Tech: Flask + MySQL stack",
      "Deployment: Docker containerization required"
    ],
    research: {
      competitiveAnalysis: "Analyzed existing platforms like Khan Academy and Coursera to identify gaps in resource sharing features.",
      keyInsights: [
        "Users need advanced search and filtering",
        "Rating and review system is essential",
        "Resource categorization improves discoverability"
      ],
      ideasExplored: [
        "AI-powered recommendations (deferred: out of scope)",
        "Video streaming (discarded: too complex)",
        "Mobile app (future consideration)"
      ]
    },
    design: {
      userFlows: "User registration → Resource upload → Categorization → Discovery → Download/View",
      uxConsiderations: [
        "Intuitive resource upload workflow",
        "Advanced search with multiple filters",
        "Clear resource preview and metadata"
      ],
      visualDecisions: [
        "Clean, educational aesthetic",
        "Card-based resource display",
        "Color-coded categories for quick scanning"
      ]
    },
    technicalArchitecture: {
      stackRationale: "Flask for rapid Python development, MySQL for relational data, Docker for consistent deployment, AppSmith for admin interface.",
      systemOverview: "Flask REST API backend, MySQL database, AppSmith admin panel, Docker containers for isolation and scalability.",
      dataModels: "Users → Resources → Categories → Reviews → Downloads. Normalized schema with proper indexing.",
      apiDesign: "RESTful API with 40+ endpoints covering all CRUD operations, pagination, and filtering."
    },
    implementation: {
      keyFeatures: [
        {
          title: "Comprehensive CRUD Operations",
          description: "Implemented 40+ CRUD operations across users, resources, categories, reviews, and downloads with proper validation.",
          technicalDetails: "Flask routes with SQLAlchemy ORM, input validation, error handling, and transaction management."
        },
        {
          title: "Docker Containerization",
          description: "Containerized Flask app and MySQL database with docker-compose for easy deployment and development environment setup.",
          technicalDetails: "Multi-stage Docker builds, environment variable management, volume mounting for data persistence."
        },
        {
          title: "Real-time Resource Management",
          description: "Built real-time updates for resource availability, ratings, and download counts using database triggers and API polling.",
          technicalDetails: "MySQL triggers for automatic updates, efficient polling mechanism, cache invalidation strategies."
        }
      ],
      stateManagement: "Server-side session management, database state for resources, client-side caching for performance.",
      performanceConsiderations: [
        "Database indexing for fast queries",
        "Connection pooling for MySQL",
        "Caching frequently accessed resources"
      ],
      edgeCases: [
        "Handling concurrent resource updates",
        "Database connection failures",
        "Large file upload handling"
      ]
    },
    challenges: {
      technical: [
        "Coordinating team development with Git",
        "Managing database migrations across environments",
        "Optimizing 40+ database queries"
      ],
      design: [
        "Creating intuitive admin interface",
        "Balancing feature richness with simplicity"
      ],
      tradeoffs: [
        {
          decision: "AppSmith vs. custom admin panel",
          rationale: "Chose AppSmith to save development time, accepting some customization limitations for faster MVP delivery."
        }
      ]
    },
    results: {
      metrics: [
        "40+ CRUD operations successfully implemented",
        "Docker deployment successful",
        "Team collaboration effective"
      ],
      outcomes: [
        "Successfully deployed application",
        "Team gained experience in collaborative development",
        "Robust backend infrastructure established"
      ],
      technicalDemonstration: [
        "Team leadership and project management",
        "Full-stack development with Python",
        "Docker containerization and deployment",
        "Database design and optimization",
        "API design and implementation"
      ]
    },
    lessonsLearned: {
      skillsDeveloped: [
        "Team leadership and coordination",
        "Flask and Python backend development",
        "Docker and containerization",
        "MySQL database design",
        "Git collaboration workflows"
      ],
      whatWouldChange: [
        "Implement automated testing from the start",
        "Use database migration tools earlier",
        "Add API documentation with Swagger",
        "Implement proper CI/CD pipeline"
      ]
    },
    nextSteps: {
      plannedFeatures: [
        "Advanced search with Elasticsearch",
        "User authentication with OAuth",
        "Resource recommendation system",
        "Mobile-responsive improvements"
      ],
      learningGoals: [
        "Explore microservices architecture",
        "Learn advanced Docker orchestration",
        "Study API design best practices",
        "Improve team collaboration tools"
      ]
    },
    links: {
      github: "https://github.com/sf0628/EduExchange-AppSmith-UI"
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectNavigation = (currentId: string): { previous: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(project => project.id === currentId);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
