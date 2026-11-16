import ProjectList from "@/components/projectList";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectPage() {
    const projects = await getProjects('school');

    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">School Projects</h1>
            <ProjectList projects={projects} />
        </main>
    );
}