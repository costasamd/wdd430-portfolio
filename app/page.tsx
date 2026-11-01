import ProjectList from "@/components/projectList";
const projects = [
  {
    title: "tcg school",
    description: "WebApp based in Yugi-Oh tcg card game, contain a library with all the cards and the possibility to add them to your personal collection in a store memory",
    technologies: ["HTML", "CSS", "JavaScript", "REStApi"],
    link: "https://github.com/costasamd/tcg_school.git"
  },
  {
    title: "Railway Kizuna",
    description: "A WebApp that fecths and display all services of the Kizuna railway",
    technologies: ["Node.js", "Express.js", "HTML", "CSS", "MongoDB", "RestApi", "JavaScript"],
    link: "https://github.com/johnvak01/cse341-team-project.git"
  }
];

export default function Home () {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="test-4x1 font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}