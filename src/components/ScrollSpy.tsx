import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type ScrollSpyGroup = "overview" | "process" | "implementation" | "results";

export interface ScrollSpySection {
  id: string;
  label: string;
  group?: ScrollSpyGroup;
}

interface ScrollSpyProps {
  sections: ScrollSpySection[];
  className?: string;
}

interface GroupedSections {
  group: ScrollSpyGroup;
  label: string;
  sections: ScrollSpySection[];
}

const ScrollSpy = ({ sections, className = "" }: ScrollSpyProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [openGroups, setOpenGroups] = useState<Set<ScrollSpyGroup>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, Element>>(new Map());
  const activeSectionRef = useRef(activeSection);

  // Check if sections are grouped
  const isGrouped = useMemo(
    () => sections.some((section) => section.group),
    [sections]
  );

  // Group sections if grouping is used
  // Always show all groups, even if they have no subsections
  const groupedSections: GroupedSections[] = useMemo(
    () =>
      isGrouped
        ? [
            {
              group: "overview" as const,
              label: "Overview",
              sections: sections.filter((s) => s.group === "overview"),
            },
            {
              group: "process" as const,
              label: "Process",
              sections: sections.filter((s) => s.group === "process"),
            },
            {
              group: "implementation" as const,
              label: "Implementation",
              sections: sections.filter((s) => s.group === "implementation"),
            },
            {
              group: "results" as const,
              label: "Results",
              sections: sections.filter((s) => s.group === "results"),
            },
          ] as GroupedSections[]
        : [],
    [isGrouped, sections]
  );

  // Get flat list of all sections for keyboard navigation
  const flatSections = useMemo(
    () =>
      isGrouped
        ? groupedSections.flatMap((group) => group.sections)
        : sections,
    [isGrouped, groupedSections, sections]
  );

  // Keep ref in sync with state
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Auto-expand group containing active section and auto-collapse others
  // Only one group should be expanded at a time (the one with the active section)
  // This runs on mount and whenever the active section changes
  useEffect(() => {
    if (isGrouped && groupedSections.length > 0) {
      const activeSectionData = sections.find((s) => s.id === activeSection);
      
      if (activeSectionData?.group) {
        // Active section belongs to a group with subsections
        setOpenGroups(new Set([activeSectionData.group]));
      } else if (activeSection) {
        // Check if active section is a group section ID (for empty groups)
        const matchingGroup = groupedSections.find((g) => g.group === activeSection);
        if (matchingGroup) {
          // Active section is an empty group, don't expand any groups (empty groups aren't collapsible)
          setOpenGroups(new Set());
        } else {
          // If active section exists but has no group, expand first group as fallback
          setOpenGroups(new Set([groupedSections[0].group]));
        }
      } else {
        // On initial mount with no active section, expand first group
        setOpenGroups(new Set([groupedSections[0].group]));
      }
    }
  }, [activeSection, isGrouped, sections, groupedSections]);

  useEffect(() => {
    // Set initial active section
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
      activeSectionRef.current = sections[0].id;
    }

    // Create IntersectionObserver for section tracking
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible in the viewport
        let maxRatio = 0;
        let mostVisibleId = activeSectionRef.current;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        });

        // Only update if we found a more visible section
        if (maxRatio > 0 && mostVisibleId !== activeSectionRef.current) {
          setActiveSection(mostVisibleId);
          activeSectionRef.current = mostVisibleId;
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper portion of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observe all sections
    const observeSections = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          sectionRefs.current.set(section.id, element);
          observerRef.current?.observe(element);
        }
      });
      
      // Also observe group section IDs for empty groups (group name maps to section id)
      if (isGrouped) {
        groupedSections.forEach((group) => {
          if (group.sections.length === 0) {
            const element = document.getElementById(group.group);
            if (element) {
              sectionRefs.current.set(group.group, element);
              observerRef.current?.observe(element);
            }
          }
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      observeSections();
      
      // Fallback: check initial active section on mount
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check regular sections
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      
      // Check group section IDs for empty groups
      if (isGrouped) {
        for (const group of groupedSections) {
          if (group.sections.length === 0) {
            const element = document.getElementById(group.group);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(group.group);
                return;
              }
            }
          }
        }
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
      sectionRefs.current.clear();
    };
  }, [sections]); // Remove activeSection from dependencies to avoid infinite loop

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (index < flatSections.length - 1) {
            setFocusedIndex(index + 1);
            (
              document.querySelector(
                `[data-scrollspy-index="${index + 1}"]`
              ) as HTMLButtonElement
            )?.focus();
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (index > 0) {
            setFocusedIndex(index - 1);
            (
              document.querySelector(
                `[data-scrollspy-index="${index - 1}"]`
              ) as HTMLButtonElement
            )?.focus();
          }
          break;
        case "Home":
          e.preventDefault();
          setFocusedIndex(0);
          (
            document.querySelector(`[data-scrollspy-index="0"]`) as HTMLButtonElement
          )?.focus();
          break;
        case "End":
          e.preventDefault();
          setFocusedIndex(flatSections.length - 1);
          (
            document.querySelector(
              `[data-scrollspy-index="${flatSections.length - 1}"]`
            ) as HTMLButtonElement
          )?.focus();
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          scrollToSection(flatSections[index].id);
          break;
      }
    },
    [flatSections, scrollToSection]
  );

  const toggleGroup = useCallback((group: ScrollSpyGroup) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  }, []);

  if (sections.length === 0) {
    return null;
  }

  // Render section button
  const renderSectionButton = (
    section: ScrollSpySection,
    index: number,
    isNested = false
  ) => (
    <li key={section.id}>
      <button
        data-scrollspy-index={index}
        onClick={() => scrollToSection(section.id)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        onFocus={() => setFocusedIndex(index)}
        onBlur={() => setFocusedIndex(null)}
        className={`group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${
          isNested ? "pl-4" : ""
        }`}
        aria-label={`Navigate to ${section.label} section`}
        aria-current={activeSection === section.id ? "page" : undefined}
      >
        <span
          className={`block w-6 h-px transition-all duration-300 motion-reduce:transition-none ${
            activeSection === section.id
              ? "bg-primary w-8"
              : "bg-muted-foreground/40 group-hover:bg-muted-foreground group-focus-visible:bg-muted-foreground"
          }`}
          aria-hidden="true"
        />
        <span
          className={`text-xs font-medium transition-all duration-300 motion-reduce:transition-none ${
            activeSection === section.id || focusedIndex === index
              ? "opacity-100 text-primary"
              : "opacity-0 group-hover:opacity-100 text-muted-foreground"
          }`}
        >
          {section.label}
        </span>
      </button>
    </li>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 motion-reduce:transition-none ${className}`}
      role="navigation"
      aria-label="Page sections"
    >
      {isGrouped ? (
        <ul className="flex flex-col gap-2" role="list">
          {groupedSections.map((group) => {
            const isOpen = openGroups.has(group.group);
            const hasSubsections = group.sections.length > 0;
            const groupSectionId = group.group; // Group name maps to section id (e.g., "overview" -> id="overview")

            // If group has no subsections, render as a clickable button that links to the group's section
            if (!hasSubsections) {
              return (
                <li key={group.group}>
                  <button
                    onClick={() => scrollToSection(groupSectionId)}
                    className="group flex items-center gap-3 w-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm py-2"
                    aria-label={`Navigate to ${group.label} section`}
                    aria-current={activeSection === groupSectionId ? "page" : undefined}
                  >
                    <span
                      className={`block w-6 h-px transition-all duration-300 motion-reduce:transition-none ${
                        activeSection === groupSectionId
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`transition-all duration-300 motion-reduce:transition-none ${
                        activeSection === groupSectionId
                          ? "opacity-100 text-primary"
                          : "opacity-100 text-muted-foreground"
                      }`}
                    >
                      {group.label}
                    </span>
                  </button>
                </li>
              );
            }

            // If group has subsections, render as collapsible
            return (
              <Collapsible
                key={group.group}
                open={isOpen}
                onOpenChange={() => toggleGroup(group.group)}
              >
                <li>
                  <CollapsibleTrigger
                    className="group flex items-center gap-3 w-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm py-2"
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${group.label} group`}
                  >
                    <span
                      className="block w-6 h-px bg-muted-foreground/40 group-hover:bg-muted-foreground transition-all duration-300 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                    <span>{group.label}</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <ul className="flex flex-col gap-2 pl-1" role="list">
                      {group.sections.map((section, groupIndex) => {
                        const globalIndex = flatSections.findIndex(
                          (s) => s.id === section.id
                        );
                        return renderSectionButton(
                          section,
                          globalIndex,
                          true
                        );
                      })}
                    </ul>
                  </CollapsibleContent>
                </li>
              </Collapsible>
            );
          })}
        </ul>
      ) : (
        <ul className="flex flex-col gap-4" role="list">
          {sections.map((section, index) => renderSectionButton(section, index))}
        </ul>
      )}
    </motion.nav>
  );
};

export default ScrollSpy;
