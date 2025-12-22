import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "jQuery", category: "frontend" },
  { name: "Laravel", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Flutter", category: "mobile" },
  { name: "DevOps", category: "other" },
  { name: "Git", category: "other" },
  { name: "Docker", category: "other" },
  { name: "AWS", category: "other" },
];

const SkillMarquee = ({ direction = "left", speed = 25 }: { direction?: "left" | "right"; speed?: number }) => {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";
  
  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        className={`flex gap-4 ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded font-mono text-sm whitespace-nowrap hover:border-primary hover:text-primary transition-all duration-300 hover:box-glow-sm cursor-default"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const categories = [
    { name: "Frontend", skills: skills.filter(s => s.category === "frontend") },
    { name: "Backend", skills: skills.filter(s => s.category === "backend") },
    { name: "Database", skills: skills.filter(s => s.category === "database") },
    { name: "Mobile & Other", skills: skills.filter(s => s.category === "mobile" || s.category === "other") },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
              {"// The Order of the Day"}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-glow">
              Tech Arsenal
            </h2>
          </div>
        </FadeIn>

        {/* Infinite Marquee */}
        <div className="mb-16 -mx-4">
          <SkillMarquee direction="left" speed={30} />
          <SkillMarquee direction="right" speed={35} />
        </div>

        {/* Categorized Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, catIndex) => (
            <FadeIn key={category.name} delay={catIndex * 0.1}>
              <div className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors group">
                <h3 className="font-display text-lg font-semibold text-primary mb-4 group-hover:text-glow transition-all">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
