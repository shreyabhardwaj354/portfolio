const skills = [
  { id: 1, skill: "DevOps" },
  { id: 2, skill: "Git" },
  { id: 3, skill: "SQL" },
  { id: 4, skill: "Node.js" },
  { id: 5, skill: "Python" },
  { id: 6, skill: "C" },
  { id: 7, skill: "AngularJS" },
  { id: 8, skill: "MongoDB" },
  { id: 9, skill: "AWS" },
  { id: 10, skill: "Linux" },
  { id: 11, skill: "LLM" },
  { id: 12, skill: "CI/CD" },
];
export default function Projects() {
  return (
    <div className="projects">
      <div className="skills">
        <h1 className="skill-headline">Skills</h1>
        <div>
          {skills.map((skill) => (
            <Card skill={skill.skill} key={skill.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ skill }) {
  return <div className="card">{skill}</div>;
}
