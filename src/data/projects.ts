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
}

export const projects: Project[] = [
  {
    id: "wardrobe-wizard",
    title: "Wardrobe Wizard",
    shortDescription: "A full-stack web application that virtualizes and curates your wardrobe with intelligent recommendations.",
    fullDescription: "A full-stack web application that virtualizes and curates your wardrobe. Developed a database to store user inputted wardrobe items and integrated user authentication and a populated user's wardrobe. Engineered a responsive UI with modern styling to provide a seamless user experience across devices. Currently researching machine learning-based recommendation algorithms to enhance personalized wardrobe suggestions.",
    thumbnail: "/placeholder-wardrobe-thumb.jpg",
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
      github: "https://github.com/sf0628/wardrobe-wizard"
    }
  },
  {
    id: "stock-manager",
    title: "Stock Manager",
    shortDescription: "A comprehensive Java application for managing stock portfolios with real-time data integration and performance analysis.",
    fullDescription: "A Java application for managing stock portfolios and performance. Integrated algorithms to manage portfolios, analyze stock trends, track stocks, value, and data persistence via XML. Incorporated Alpha Vantage API to retrieve real-time stock data by sending requests to an external financial data API. Wrote 150+ tests in JUnit, including unit/integration tests and mock testing for MVC components, ensuring robust functionality.",
    thumbnail: "/placeholder-stock-thumb.jpg",
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
    id: "edushare-hub",
    title: "EduShare Hub",
    shortDescription: "An educational resource sharing platform enabling collaborative learning and resource management.",
    fullDescription: "An educational resource sharing web application. Led a 4-member team to develop an educational resource sharing web app, managing 40+ CRUD operations in a MySQL database for real-time resource management. Utilized Docker to containerize Flask applications and MySQL database, ensuring a consistent and isolated environment.",
    thumbnail: "/placeholder-edushare-thumb.jpg",
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
      github: "https://github.com/sf0628/edushare-hub"
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
