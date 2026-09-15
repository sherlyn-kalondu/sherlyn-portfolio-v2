import { skillGroups } from "../../data/skills";
import Badge from "../common/Badge";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20 lg:px-8" style={{ background: 'var(--offwhite)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Technical toolkit" title="Tools I use to bring ideas to life." description="A growing, practical toolkit centred on maintainable web applications." />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
