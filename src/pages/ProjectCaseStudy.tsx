import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ScrollSpy from "@/components/ScrollSpy";
import { ArrowLeft, ExternalLink, Github, Play, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { getProjectById, getProjectNavigation } from "@/data/projects";
import { useEffect, useState } from "react";

// Import ProsperouSSS images
import createTwinImg from "@/assets/prosperouSSS/create_twin.png";
import powerpointImg from "@/assets/prosperouSSS/powerpoint.png";
import userDemographicsImg from "@/assets/prosperouSSS/user_demographics.png";
import correlationInsightsImg from "@/assets/prosperouSSS/correlation_insights.png";
import correlationSpendingMarketImg from "@/assets/prosperouSSS/correlation_spending_market.png";
import whatIfScenariosImg from "@/assets/prosperouSSS/what_if_scenarios.png";
import priceRecommendationsImg from "@/assets/prosperouSSS/price_recommenations.png";
import exportImportImg from "@/assets/prosperouSSS/export_import.png";

// Map image paths to imported images
const prosperousImageMap: Record<string, string> = {
  "/src/assets/prosperouSSS/create_twin.png": createTwinImg,
  "/src/assets/prosperouSSS/powerpoint.png": powerpointImg,
  "/src/assets/prosperouSSS/user_demographics.png": userDemographicsImg,
  "/src/assets/prosperouSSS/correlation_insights.png": correlationInsightsImg,
  "/src/assets/prosperouSSS/correlation_spending_market.png": correlationSpendingMarketImg,
  "/src/assets/prosperouSSS/what_if_scenarios.png": whatIfScenariosImg,
  "/src/assets/prosperouSSS/price_recommenations.png": priceRecommendationsImg,
  "/src/assets/prosperouSSS/export_import.png": exportImportImg,
};

const ProjectImage = ({ src, caption }: { src: string; caption?: string }) => {
  // Get the imported image from the map, or fallback to the original path
  const imageSrc = prosperousImageMap[src] || src;
  
  return (
    <figure className="my-6">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        src={imageSrc}
        alt={caption || "Project image"}
        className="w-full rounded-lg border border-border shadow-sm"
        loading="lazy"
      />
      {caption && (
        <motion.figcaption
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-3 text-sm text-muted-foreground italic text-center"
        >
          {caption}
        </motion.figcaption>
      )}
    </figure>
  );
};

const ProjectCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const navigation = id ? getProjectNavigation(id) : { previous: null, next: null };
  const navigate = useNavigate();
  const { scrollYProgress, scrollY } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Show back to top button after scrolling past threshold (400px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 400);
  });

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Case Study`;
    }
  }, [project]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    // Use setTimeout to ensure the route change completes before scrolling
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const Section = ({ 
    id,
    title, 
    children, 
    delay = 0 
  }: { 
    id: string;
    title: string; 
    children: React.ReactNode; 
    delay?: number;
  }) => (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 scroll-mt-32"
    >
      <h2 className="font-display text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border">
        {title}
      </h2>
      {children}
    </motion.section>
  );

  // Define sections for scrollspy based on available project data
  // Grouped into logical categories: Overview, Process, Implementation, Results
  const projectSections = [
    // Process group
    { id: "problem-goals", label: "Problem & Goals", group: "process" as const },
    ...(project.research
      ? [{ id: "research-ideation", label: "Research", group: "process" as const }]
      : []),
    ...(project.design
      ? [{ id: "design-process", label: "Design", group: "process" as const }]
      : []),
    
    // Implementation group
    ...(project.technicalArchitecture
      ? [
          {
            id: "technical-architecture",
            label: "Architecture",
            group: "implementation" as const,
          },
        ]
      : []),
    ...(project.implementation
      ? [
          {
            id: "implementation",
            label: "Implementation",
            group: "implementation" as const,
          },
        ]
      : []),
    ...(project.challenges
      ? [{ id: "challenges", label: "Challenges", group: "implementation" as const }]
      : []),
    
    // Results group
    ...(project.results
      ? [{ id: "results", label: "Results", group: "results" as const }]
      : []),
    ...(project.lessonsLearned
      ? [
          {
            id: "lessons-learned",
            label: "Lessons",
            group: "results" as const,
          },
        ]
      : []),
    ...(project.nextSteps
      ? [{ id: "next-steps", label: "Next Steps", group: "results" as const }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* ScrollSpy Navigation */}
      <ScrollSpy sections={projectSections} />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Minimal Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/#work"
              onClick={handleBackToWork}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back</span>
            </Link>
          </motion.div>

          {/* Project Overview */}
          <motion.header
            id="overview"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 scroll-mt-32"
          >
            {project.images?.filter(img => img.section === "overview").map((img, idx) => (
              <ProjectImage key={idx} src={img.src} caption={img.caption} />
            ))}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.valueProposition}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Play className="w-4 h-4" />
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Github className="w-4 h-4" />
                  View Code
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-display tracking-wide text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Problem & Goals */}
          <Section id="problem-goals" title="Problem & Goals">
            <div className="space-y-6">
              {project.images?.filter(img => img.section === "problem-goals").map((img, idx) => (
                <ProjectImage key={idx} src={img.src} caption={img.caption} />
              ))}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Problem Statement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Target Users
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.targetUsers}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Success Criteria
                </h3>
                <ul className="space-y-2">
                  {project.successCriteria.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Constraints
                </h3>
                <ul className="space-y-2">
                  {project.constraints.map((constraint, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Research & Ideation */}
          {project.research && (
            <Section id="research-ideation" title="Research & Ideation" delay={0.1}>
              <div className="space-y-6">
                {project.research.competitiveAnalysis && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Competitive Analysis
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.research.competitiveAnalysis}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Key Insights
                  </h3>
                  <ul className="space-y-2">
                    {project.research.keyInsights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Ideas Explored
                  </h3>
                  <ul className="space-y-2">
                    {project.research.ideasExplored.map((idea, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* Design Process */}
          {project.design && (
            <Section id="design-process" title="Design Process" delay={0.2}>
              <div className="space-y-6">
                {project.design.userFlows && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      User Flows
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.design.userFlows}
                    </p>
                  </div>
                )}

                {project.design.wireframes && project.design.wireframes.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Wireframes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.design.wireframes.map((wireframe, i) => (
                        <div
                          key={i}
                          className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm"
                        >
                          [Wireframe Placeholder {i + 1}]
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.design.iterations && project.design.iterations.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Design Iterations
                    </h3>
                    <div className="space-y-4">
                      {project.design.iterations.map((iteration, i) => (
                        <div key={i} className="p-4 border border-border rounded-lg">
                          <p className="text-sm font-medium text-foreground mb-2">
                            Iteration {i + 1}
                          </p>
                          <p className="text-muted-foreground text-sm">{iteration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    UX Considerations
                  </h3>
                  <ul className="space-y-2">
                    {project.design.uxConsiderations.map((consideration, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Visual Design Decisions
                  </h3>
                  <ul className="space-y-2">
                    {project.design.visualDecisions.map((decision, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* Technical Architecture */}
          {project.technicalArchitecture && (
            <Section id="technical-architecture" title="Technical Architecture" delay={0.3}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Tech Stack Rationale
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.technicalArchitecture.stackRationale}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    System Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.technicalArchitecture.systemOverview}
                  </p>
                </div>

                {project.technicalArchitecture.dataModels && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Data Models
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.technicalArchitecture.dataModels}
                    </p>
                  </div>
                )}

                {project.technicalArchitecture.apiDesign && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      API Design
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.technicalArchitecture.apiDesign}
                    </p>
                  </div>
                )}
              </div>
            </Section>
          )}

          {/* Implementation Deep Dive */}
          {project.implementation && (
            <Section id="implementation" title="Implementation Deep Dive" delay={0.4}>
              <div className="space-y-8">
                {project.images?.filter(img => img.section === "implementation").map((img, idx) => (
                  <ProjectImage key={idx} src={img.src} caption={img.caption} />
                ))}
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Key Features
                  </h3>
                  <div className="space-y-6">
                    {project.implementation.keyFeatures.map((feature, i) => (
                      <div key={i} className="p-6 border border-border rounded-lg">
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        {feature.technicalDetails && (
                          <div className="mt-3 p-3 bg-muted rounded-md">
                            <p className="text-sm text-muted-foreground font-mono">
                              {feature.technicalDetails}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {project.implementation.algorithms && project.implementation.algorithms.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Algorithms
                    </h3>
                    <ul className="space-y-2">
                      {project.implementation.algorithms.map((algorithm, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {algorithm}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.implementation.stateManagement && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      State Management
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.implementation.stateManagement}
                    </p>
                  </div>
                )}

                {project.implementation.performanceConsiderations && project.implementation.performanceConsiderations.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Performance Considerations
                    </h3>
                    <ul className="space-y-2">
                      {project.implementation.performanceConsiderations.map((consideration, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.implementation.edgeCases && project.implementation.edgeCases.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Edge Cases Handled
                    </h3>
                    <ul className="space-y-2">
                      {project.implementation.edgeCases.map((edgeCase, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {edgeCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Section>
          )}

          {/* Challenges & Trade-offs */}
          {project.challenges && (
            <Section id="challenges" title="Challenges & Trade-offs" delay={0.5}>
              <div className="space-y-6">
                {project.challenges.technical && project.challenges.technical.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Technical Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.technical.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges.design && project.challenges.design.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Design Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.design.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges.tradeoffs && project.challenges.tradeoffs.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Trade-offs Made
                    </h3>
                    <div className="space-y-4">
                      {project.challenges.tradeoffs.map((tradeoff, i) => (
                        <div key={i} className="p-4 border border-border rounded-lg">
                          <p className="font-medium text-foreground mb-2">
                            {tradeoff.decision}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {tradeoff.rationale}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Section>
          )}

          {/* Results & Impact */}
          {project.results && (
            <Section id="results" title="Results & Impact" delay={0.6}>
              <div className="space-y-6">
                {project.images?.filter(img => img.section === "results").map((img, idx) => (
                  <ProjectImage key={idx} src={img.src} caption={img.caption} />
                ))}
                {project.results.metrics && project.results.metrics.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Metrics
                    </h3>
                    <ul className="space-y-2">
                      {project.results.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results.performance && project.results.performance.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      Performance Improvements
                    </h3>
                    <ul className="space-y-2">
                      {project.results.performance.map((perf, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          {perf}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {project.results.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Technical Demonstration
                  </h3>
                  <ul className="space-y-2">
                    {project.results.technicalDemonstration.map((demo, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {demo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* Lessons Learned & Growth */}
          {project.lessonsLearned && (
            <Section id="lessons-learned" title="Lessons Learned & Growth" delay={0.7}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Skills Developed
                  </h3>
                  <ul className="space-y-2">
                    {project.lessonsLearned.skillsDeveloped.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    What Would Be Done Differently
                  </h3>
                  <ul className="space-y-2">
                    {project.lessonsLearned.whatWouldChange.map((change, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* Next Steps */}
          {project.nextSteps && (
            <Section id="next-steps" title="Next Steps" delay={0.8}>
              <div className="space-y-6">
                {project.images?.filter(img => img.section === "next-steps").map((img, idx) => (
                  <ProjectImage key={idx} src={img.src} caption={img.caption} />
                ))}
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Planned Features
                  </h3>
                  <ul className="space-y-2">
                    {project.nextSteps.plannedFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Learning Goals
                  </h3>
                  <ul className="space-y-2">
                    {project.nextSteps.learningGoals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▸</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          )}

          {/* Previous/Next Project Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-20 pt-8 border-t border-border"
          >
            <div className="flex justify-between items-center gap-4">
              {navigation.previous ? (
                <Link
                  to={`/projects/${navigation.previous.id}`}
                  className="group flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex-1 max-w-[48%]"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">Previous Project</span>
                    <span className="font-medium truncate w-full">{navigation.previous.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex-1 max-w-[48%]" aria-hidden="true" />
              )}

              <Link
                to="/#work"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                aria-label="Back to all projects"
              >
                All Projects
              </Link>

              {navigation.next ? (
                <Link
                  to={`/projects/${navigation.next.id}`}
                  className="group flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex-1 max-w-[48%] text-right justify-end"
                >
                  <div className="flex flex-col items-end min-w-0">
                    <span className="text-xs text-muted-foreground/70 mb-0.5">Next Project</span>
                    <span className="font-medium truncate w-full">{navigation.next.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ) : (
                <div className="flex-1 max-w-[48%]" aria-hidden="true" />
              )}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCaseStudy;
