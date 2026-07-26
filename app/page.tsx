import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StoriesGrid from "@/components/StoriesGrid";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import EducationBlock from "@/components/EducationBlock";
import PersonalityBlock from "@/components/PersonalityBlock";
import Footer from "@/components/Footer";
import { experience, projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <Section id="story" label="How I Work" title="What I bring to the table">
        <StoriesGrid />
      </Section>

      <Section id="experience" label="Experience" title="Where I've worked">
        {experience.map((entry) => (
          <ExperienceItem key={entry.role} entry={entry} />
        ))}
      </Section>

      <Section id="projects" label="Projects" title="Things I've built">
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" label="Skills" title="What I work with">
        <SkillsGrid />
      </Section>

      <Section id="education" label="Education" title="Background">
        <EducationBlock />
      </Section>

      <Section id="beyond" label="Beyond Work" title="Life outside the terminal">
        <PersonalityBlock />
      </Section>

      <Footer />
    </>
  );
}
