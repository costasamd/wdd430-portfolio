import ProjectList from "@/components/projectList";
import { getProjects } from "@/lib/projects-db";


export default  async function ProjectPage () {
    
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="test-4xl font-bold mb-4">All Projects</h1>

      <ProjectList projects={projects} />
    </main>
  );
}