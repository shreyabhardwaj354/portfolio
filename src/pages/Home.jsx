import img from "./profile.jpeg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="name">
          <h1>Hi! I am Ashish </h1>
        </div>
        <div className="about">
          <p>
            I’m a DevOps engineer with 5+ years of experience working on cloud
            infrastructure, automation, and CI/CD pipelines.<br></br> I’ve
            worked across Azure and AWS, focusing on secure, scalable, and
            efficient deployments. Recently, I’ve been involved in the GenAI
            space, where I support the development of LLM-powered applications
            by building the infrastructure and automation that keep them running
            reliably across environments.<br></br> This blend of DevOps and AI
            has allowed me to work on cutting-edge projects while deepening my
            expertise in cloud-native deployments and infrastructure as code.
            Outside of work, I’m always curious about how new technologies
            especially AI and automation, can solve real-world problems
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/aaahsheeesh/"
          className="experience"
        >
          Achievements
        </a>
      </div>
      <div className="home-img">
        <img src={img} alt="profile" className="profile"></img>
      </div>
    </div>
  );
}
